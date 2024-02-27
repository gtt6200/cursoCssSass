import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Categorias, Productos } from './interfaces/landing';


@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})

export class EcommerceComponent implements OnInit {
  title: string = "Inicio";
  img: string = "/../../assets/img/ecommerce/";
  jpg: string = ".jpg";
  categorias!: Categorias[];
  productos !: Productos[];
  descripcion: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem id possimus praesentium eum assumenda accusamus temporibus dolor omnis doloremque Expedita in delectus asperiores iusto saepe eligendi voluptate quod placeat";
  constructor(private _titleService: Title, public _router: Router) { }

  ngOnInit(): void {
    this._titleService.setTitle(this.title)
    this.categorias = [
      { img: "d", titulo: "oficina", href: this.img + "categoria1" + this.jpg },
      { img: "d", titulo: "hogar", href: this.img + "categoria2" + this.jpg },
      { img: "d", titulo: "cocina", href: this.img + "categoria3" + this.jpg }
    ];

    this.productos = [
      { titulo: "Producto 1", descripcion: this.descripcion, precio: 3, img: this.img + "producto1" + this.jpg, href: "#" },
      { titulo: "Producto 3", descripcion: this.descripcion, precio: 3, img: this.img + "producto2" + this.jpg, href: "#" },
      { titulo: "Producto 2", descripcion: this.descripcion, precio: 3, img: this.img + "producto3" + this.jpg, href: "#" },
      { titulo: "Producto 4", descripcion: this.descripcion, precio: 3, img: this.img + "producto4" + this.jpg, href: "#" },
      { titulo: "Producto 5", descripcion: this.descripcion, precio: 3, img: this.img + "producto5" + this.jpg, href: "#" },
      { titulo: "Producto 6", descripcion: this.descripcion, precio: 3, img: this.img + "producto6" + this.jpg, href: "#" }
    ];
  }


}
