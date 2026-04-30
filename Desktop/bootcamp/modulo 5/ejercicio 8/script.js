class GhibliAPI {
    constructor() {
        this.url = "https://ghibliapi.vercel.app/films";
        this.peliculas = null; 
    }


    async #obtenerPeliculas() {
        if (this.peliculas) return this.peliculas;
        const response = await fetch(this.url);
        this.peliculas = await response.json();
        return this.peliculas;
    }

   
    #mostrarEnPagina(items) {
        const contenedor = document.getElementById("resultado");
        contenedor.textContent = "";

        items.forEach(texto => {
            const p = document.createElement("p");
            p.textContent = texto;
            contenedor.appendChild(p);
        });
    }

    async titulosYDirectores() {
        const films = await this.#obtenerPeliculas();
        this.#mostrarEnPagina(
            films.map(f => `${f.title} — Director: ${f.director}`)
        );
    }

    async titulosYAnio() {
        const films = await this.#obtenerPeliculas();
        this.#mostrarEnPagina(
            films.map(f => `${f.title} (${f.release_date})`)
        );
    }

    async buscarPorAnio() {
        const anio = prompt("Ingresa un año:");
        if (!anio) return;

        const films = await this.#obtenerPeliculas();
        const filtradas = films.filter(f => f.release_date === anio);

        if (filtradas.length === 0) {
            this.#mostrarEnPagina([`No hay películas del año ${anio}`]);
        } else {
            this.#mostrarEnPagina(
                filtradas.map(f => `${f.title} (${f.release_date})`)
            );
        }
    }

    async titulosYDescripcion() {
        const films = await this.#obtenerPeliculas();
        this.#mostrarEnPagina(
            films.map(f => `${f.title}: ${f.description}`)
        );
    }

    async listarIds() {
        const films = await this.#obtenerPeliculas();
        this.#mostrarEnPagina(
            films.map(f => `${f.title} → ${f.id}`)
        );
    }
}


const api = new GhibliAPI();