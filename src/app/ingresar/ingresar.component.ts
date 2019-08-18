import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {
  registroFormGroup : FormGroup
  datos=["Pablo", "Gabriel"]
  datosJson: any
  edicion:boolean=false
  seleccionActual=0
  vacio:boolean=false
  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.registroFormGroup = this.formBuilder.group({
      'nombre' : ['', Validators.required],
      'json' : [''],

    })
    console.log("datos: ", this.datos)
    var datosJson = JSON.stringify(this.datos)
    this.registroFormGroup.get('json').setValue(datosJson)
  }
  volver(){
    this.router.navigate(['/'])
  }

  insertar(){
    if(this.registroFormGroup.value['nombre']==''){
      this.vacio=true
      setTimeout(() => {
        this.vacio = false
      }, 5000);
    }
    else{
      console.log(this.registroFormGroup.value['nombre'])
      this.datos.push(this.registroFormGroup.value['nombre'])
      this.registroFormGroup.get('nombre').setValue('')
      var datosJson = JSON.stringify(this.datos)
      this.registroFormGroup.get('json').setValue(datosJson)
    }
  }

  editar(i){
    console.log("I: ", i)
    this.edicion=true
    this.seleccionActual=i
    this.registroFormGroup.get('nombre').setValue(this.datos[i])
  }

  borrar(i){
    console.log("I: ", i)
    this.datos.splice(i, 1);
    var datosJson = JSON.stringify(this.datos)
    this.registroFormGroup.get('json').setValue(datosJson)
  }
  actualizar(){
    if(this.registroFormGroup.value['nombre']==''){
      this.vacio=true
      setTimeout(() => {
        this.vacio = false
      }, 5000); 
    }
    else{
      this.datos[this.seleccionActual]=this.registroFormGroup.value['nombre']
      this.edicion=false
      this.registroFormGroup.get('nombre').setValue('')
      var datosJson = JSON.stringify(this.datos)
      this.registroFormGroup.get('json').setValue(datosJson)
    }
  }

}
