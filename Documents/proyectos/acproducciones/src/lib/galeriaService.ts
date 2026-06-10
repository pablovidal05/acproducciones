"use client";

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { db, storage } from "./firebase";
import { GaleriaItem } from "./types";

const COLLECTION = "galeria";

export async function getGaleriaItems(): Promise<GaleriaItem[]> {
  try {
    const q = query(collection(db, COLLECTION), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as GaleriaItem[];
  } catch (error) {
    console.error("Error fetching galeria items:", error);
    return [];
  }
}

export async function getGaleriaItemsByCategory(
  categoria: "corporativo" | "marca"
): Promise<GaleriaItem[]> {
  try {
    const q = query(
      collection(db, COLLECTION),
      where("categoria", "==", categoria),
      orderBy("createdAt", "desc")
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as GaleriaItem[];
  } catch (error) {
    console.error("Error fetching galeria items by category:", error);
    return [];
  }
}

export async function addGaleriaItem(
  item: Omit<GaleriaItem, "id" | "createdAt" | "updatedAt">
): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, COLLECTION), {
      ...item,
      createdAt: Timestamp.now().toMillis(),
      updatedAt: Timestamp.now().toMillis(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding galeria item:", error);
    throw error;
  }
}

export async function updateGaleriaItem(
  id: string,
  item: Partial<Omit<GaleriaItem, "id" | "createdAt">>
): Promise<void> {
  try {
    const docRef = doc(db, COLLECTION, id);
    await updateDoc(docRef, {
      ...item,
      updatedAt: Timestamp.now().toMillis(),
    });
  } catch (error) {
    console.error("Error updating galeria item:", error);
    throw error;
  }
}

export async function deleteGaleriaItem(id: string): Promise<void> {
  try {
    await deleteDoc(doc(db, COLLECTION, id));
  } catch (error) {
    console.error("Error deleting galeria item:", error);
    throw error;
  }
}

export async function uploadImage(file: File, path: string): Promise<string> {
  try {
    const storageRef = ref(storage, path);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
}

export async function deleteImage(url: string): Promise<void> {
  try {
    const storageRef = ref(storage, url);
    await deleteObject(storageRef);
  } catch (error) {
    console.error("Error deleting image:", error);
    throw error;
  }
}
