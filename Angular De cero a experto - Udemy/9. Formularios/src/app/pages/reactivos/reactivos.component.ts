import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidadoresService } from 'src/app/services/validadores.service';

@Component({
  selector: 'app-reactivos',
  templateUrl: './reactivos.component.html',
  styleUrls: ['./reactivos.component.css']
})
export class ReactivosComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private _validadores: ValidadoresService) { 
    
    this.crearFormulario();
    // this.cargarData();
    this.crearListeners();
  
  }

  ngOnInit(): void {
  }

  get nombreNoValido() {

    let formElement = this.formulario.get("nombre");
    return formElement.invalid && formElement.touched;

  }

  get apellidoNoValido() {

    let formElement = this.formulario.get("apellidos");
    return formElement.invalid && formElement.touched;

  }

  get emailNoValido() {

    let formElement = this.formulario.get("email");
    return formElement.invalid && formElement.touched;

  }

  ControlNoValidoYPropiedad(control: string, propiedad: string) : boolean {

    let fromControl = this.formulario.get(control);
    
    if(fromControl.errors != null && propiedad in fromControl.errors){
      return fromControl.errors[propiedad] && fromControl.invalid && fromControl.touched;
    }

    return false;

  }

  ControlNoValido(control: string) : boolean {

    let fromControl = this.formulario.get(control);
    return fromControl.invalid && fromControl.touched;

  }
  
  GetDataArrayControl(control: string) : FormArray {

    let fromControl = this.formulario.get(control);
    return fromControl as FormArray;

  }

  ControlValidarIgualdad(control1: string, control2: string) : boolean {

    let fromControl1 = this.formulario.get(control1);
    let fromControl2 = this.formulario.get(control2);

    if(fromControl1.value === fromControl2.value) {
      return true;
    }

    return false;

  }

  crearFormulario(): void {

    this.formulario = this.formBuilder.group(
    {
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellidos: ['', [Validators.required, this._validadores.noHerrera]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      usuario: ['', , this._validadores.existeUsuario],
      pass1: ['', Validators.required],
      pass2: ['', Validators.required],
      direccion: this.formBuilder.group({
        distrito: ['', Validators.required],
        ciudad: ['', Validators.required]
      }),
      pasatiempos: this.formBuilder.array([]),
      cursos: this.formBuilder.array([])
    },
    {
      validators: this._validadores.EqualsTwoControl("pass1", "pass2")
    }
    );

  }

  cargarData(): void {

    this.formulario.setValue({
      nombre: "Axel Yoliston",
      apellidos: "Vasquez Herrera",
      email: "axel@gmail.com",
      direccion: {
        distrito: "Lima",
        ciudad: "Lima"
      }
    });

  }

  crearListeners() {

    // this.formulario.valueChanges.subscribe(valor => {
    //   console.log(valor);
    // })

    // this.formulario.statusChanges.subscribe(status => console.log({status}));

    // this.formulario.get("nombre").valueChanges.subscribe(console.log);

  }

  addPasatiempo(): void {

    this.GetDataArrayControl("pasatiempos").push( this.formBuilder.control('', [Validators.required]) );

  }

  removePasatiempo(indice: number): void {

    this.GetDataArrayControl("pasatiempos").removeAt(indice);

  }

  addCurso(): void{

    this.GetDataArrayControl("cursos").push( 
        this.formBuilder.group({
          curso: [''],
          nota: ['']
        })
    );

  }

  removeCurso(indice: number): void {

    this.GetDataArrayControl("cursos").removeAt(indice);

  }

  resetearData(): void {

    this.formulario.reset({
      nombre: "Axel Yoliston"
    });

  }

  guardar() {

    console.log(this.formulario);

    if(this.formulario.invalid) {
      
      return Object.values(this.formulario.controls).forEach(control => {
        
        if(control instanceof FormGroup) {
          Object.values(control.controls).forEach(control => control.markAsTouched())
        } else {
          control.markAsTouched();
        }

      });

    }

    console.log("Todo ok");
    console.log(this.formulario);

  }

  resetear(): void {

    this.resetearData();

  }

}
