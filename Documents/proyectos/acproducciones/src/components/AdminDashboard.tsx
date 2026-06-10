"use client";

import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { getGaleriaItems, addGaleriaItem, updateGaleriaItem, deleteGaleriaItem, uploadImage } from "@/lib/galeriaService";
import { GaleriaItem } from "@/lib/types";

export default function AdminDashboard() {
  const [items, setItems] = useState<GaleriaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<GaleriaItem>>({
    titulo: "",
    bajada: "",
    categoria: "corporativo",
    imagen: "",
    imagenesExtra: [],
  });
  const [uploadingImage, setUploadingImage] = useState(false);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      const data = await getGaleriaItems();
      setItems(data);
    } catch (error) {
      console.error("Error loading items:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, fieldName: "imagen" | "imagenesExtra") => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    try {
      const path = `galeria/${Date.now()}_${file.name}`;
      const url = await uploadImage(file, path);

      if (fieldName === "imagen") {
        setFormData((prev) => ({ ...prev, imagen: url }));
      } else {
        setFormData((prev) => ({
          ...prev,
          imagenesExtra: [...(prev.imagenesExtra || []), url],
        }));
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error al subir imagen");
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.titulo || !formData.imagen || !formData.categoria) {
      alert("Por favor completa los campos requeridos");
      return;
    }

    try {
      if (editingId) {
        await updateGaleriaItem(editingId, formData);
      } else {
        await addGaleriaItem(formData as Omit<GaleriaItem, "id" | "createdAt" | "updatedAt">);
      }
      await loadItems();
      setShowForm(false);
      setEditingId(null);
      setFormData({
        titulo: "",
        bajada: "",
        categoria: "corporativo",
        imagen: "",
        imagenesExtra: [],
      });
    } catch (error) {
      console.error("Error saving item:", error);
      alert("Error al guardar");
    }
  };

  const handleEdit = (item: GaleriaItem) => {
    setFormData(item);
    setEditingId(item.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("¿Estás seguro de que deseas eliminar este proyecto?")) {
      try {
        await deleteGaleriaItem(id);
        await loadItems();
      } catch (error) {
        console.error("Error deleting item:", error);
        alert("Error al eliminar");
      }
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  if (loading) {
    return <div className="admin-loading">Cargando...</div>;
  }

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>Admin - AC Producciones</h1>
        <button onClick={handleLogout} className="logout-btn">
          Cerrar sesión
        </button>
      </header>

      <main className="admin-main">
        <div className="admin-toolbar">
          <h2>Gestión de Proyectos</h2>
          <button
            onClick={() => {
              setShowForm(true);
              setEditingId(null);
              setFormData({
                titulo: "",
                bajada: "",
                categoria: "corporativo",
                imagen: "",
                imagenesExtra: [],
              });
            }}
            className="btn-primary"
          >
            + Nuevo Proyecto
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} className="admin-form">
            <h3>{editingId ? "Editar" : "Nuevo"} Proyecto</h3>

            <div className="form-row">
              <div className="form-group">
                <label>Título *</label>
                <input
                  type="text"
                  value={formData.titulo || ""}
                  onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Categoría *</label>
                <select
                  value={formData.categoria || "corporativo"}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      categoria: e.target.value as "corporativo" | "marca",
                    })
                  }
                  required
                >
                  <option value="corporativo">Eventos Corporativos</option>
                  <option value="marca">Experiencia de Marca</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Bajada (resumen corto)</label>
              <textarea
                value={formData.bajada || ""}
                onChange={(e) => setFormData({ ...formData, bajada: e.target.value })}
                rows={2}
              />
            </div>

            <div className="form-group">
              <label>Imagen Principal *</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, "imagen")}
                disabled={uploadingImage}
              />
              {formData.imagen && (
                <div className="image-preview">
                  <img src={formData.imagen} alt="preview" />
                </div>
              )}
            </div>

            <div className="form-group">
              <label>Imágenes Adicionales</label>
              <input
                type="file"
                accept="image/*,video/*"
                onChange={(e) => handleImageUpload(e, "imagenesExtra")}
                disabled={uploadingImage}
              />
              {formData.imagenesExtra && formData.imagenesExtra.length > 0 && (
                <div className="image-list">
                  {formData.imagenesExtra.map((img, i) => (
                    <div key={i} className="image-item">
                      {img.includes(".mp4") || img.includes(".webm") ? (
                        <video src={img} controls width={100} height={100} />
                      ) : (
                        <img src={img} alt={`extra-${i}`} />
                      )}
                      <button
                        type="button"
                        onClick={() => {
                          setFormData({
                            ...formData,
                            imagenesExtra: formData.imagenesExtra?.filter((_, idx) => idx !== i),
                          });
                        }}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary" disabled={uploadingImage}>
                {uploadingImage ? "Subiendo..." : editingId ? "Actualizar" : "Crear"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                }}
                className="btn-secondary"
              >
                Cancelar
              </button>
            </div>
          </form>
        )}

        <div className="admin-items">
          {items.map((item) => (
            <div key={item.id} className="admin-item">
              <img src={item.imagen} alt={item.titulo} className="item-img" />
              <div className="item-info">
                <h4>{item.titulo}</h4>
                <p className="item-category">{item.categoria}</p>
                <p className="item-bajada">{item.bajada}</p>
              </div>
              <div className="item-actions">
                <button onClick={() => handleEdit(item)} className="btn-edit">
                  Editar
                </button>
                <button onClick={() => handleDelete(item.id)} className="btn-delete">
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <style jsx>{`
        .admin-dashboard {
          min-height: 100vh;
          background: #f5f5f5;
        }

        .admin-header {
          background: white;
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .admin-header h1 {
          margin: 0;
          font-size: 24px;
        }

        .logout-btn {
          padding: 8px 16px;
          background: #e74c3c;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 600;
        }

        .logout-btn:hover {
          background: #c0392b;
        }

        .admin-main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        .admin-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          background: white;
          padding: 20px;
          border-radius: 8px;
        }

        .admin-toolbar h2 {
          margin: 0;
          font-size: 20px;
        }

        .btn-primary {
          padding: 10px 20px;
          background: #667eea;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 600;
        }

        .btn-primary:hover:not(:disabled) {
          background: #5568d3;
        }

        .btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .btn-secondary {
          padding: 10px 20px;
          background: #95a5a6;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 600;
        }

        .btn-secondary:hover {
          background: #7f8c8d;
        }

        .admin-form {
          background: white;
          padding: 30px;
          border-radius: 8px;
          margin-bottom: 30px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .admin-form h3 {
          margin-top: 0;
          margin-bottom: 20px;
          font-size: 18px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-weight: 600;
          color: #333;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .image-preview {
          margin-top: 10px;
          max-width: 200px;
        }

        .image-preview img {
          max-width: 100%;
          border-radius: 4px;
        }

        .image-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          gap: 10px;
          margin-top: 10px;
        }

        .image-item {
          position: relative;
          width: 100%;
          aspect-ratio: 1;
          border-radius: 4px;
          overflow: hidden;
        }

        .image-item img,
        .image-item video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .image-item button {
          position: absolute;
          top: 5px;
          right: 5px;
          width: 24px;
          height: 24px;
          padding: 0;
          background: rgba(0, 0, 0, 0.6);
          color: white;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          font-size: 14px;
        }

        .form-actions {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }

        .admin-items {
          display: grid;
          gap: 15px;
        }

        .admin-item {
          background: white;
          padding: 15px;
          border-radius: 8px;
          display: grid;
          grid-template-columns: 150px 1fr auto;
          gap: 20px;
          align-items: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .item-img {
          width: 150px;
          height: 150px;
          object-fit: cover;
          border-radius: 4px;
        }

        .item-info h4 {
          margin: 0 0 8px;
          font-size: 16px;
        }

        .item-category {
          display: inline-block;
          background: #ecf0f1;
          padding: 4px 8px;
          border-radius: 3px;
          font-size: 12px;
          margin: 0 0 8px;
        }

        .item-bajada {
          margin: 0;
          color: #666;
          font-size: 14px;
          line-height: 1.4;
        }

        .item-actions {
          display: flex;
          gap: 10px;
        }

        .btn-edit,
        .btn-delete {
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 600;
          font-size: 14px;
        }

        .btn-edit {
          background: #3498db;
          color: white;
        }

        .btn-edit:hover {
          background: #2980b9;
        }

        .btn-delete {
          background: #e74c3c;
          color: white;
        }

        .btn-delete:hover {
          background: #c0392b;
        }

        .admin-loading {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          font-size: 18px;
          color: #666;
        }
      `}</style>
    </div>
  );
}
