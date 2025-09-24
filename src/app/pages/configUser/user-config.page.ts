import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalUid } from 'src/app/core/providers/globalUid/global-uid';
import { GlobalUser } from 'src/app/core/providers/globalUser/global-user';
import { Modify } from 'src/app/core/providers/modify/modify';
import { NativeToast } from 'src/app/core/providers/nativeToast/native-toast';
import { Query } from 'src/app/core/providers/query/query';

@Component({
  selector: 'app-user-config',
  templateUrl: './user-config.page.html',
  styleUrls: ['./user-config.page.scss'],
  standalone: false
})
export class UserConfigPage implements OnInit {
  name!: FormControl;
  lastName!: FormControl;
  modifyForm!: FormGroup;

  nombre: string = '';
  apellido: string = '';


  constructor(private readonly userSrv: GlobalUser,
    private readonly modifySrv: Modify,
    private readonly globalUid: GlobalUid,
    private readonly toast: NativeToast
  ) {
    this.initForm();
   }

  ngOnInit() {
    this.prueba();
   }

  prueba(){
    const name = this.userSrv.getName();
    const lastName = this.userSrv.getLastName();

       this.modifyForm.patchValue({
      name: name || '',
      lastName: lastName || '',
    });

  }

  // async modifyUser(){
  //   const uid =  this.globalUid.getUid();
  //   await this.modifySrv.update(uid, this.modifyForm.value);

  //   this.toast.show("Usuario actualizado");


  // }

  private initForm(){
    // const oldName = this.userSrv.getName();
    // const oldLastName = this.userSrv.getLastName();
    this.name = new FormControl(this.nombre, [Validators.required]);
    this.lastName = new FormControl(this.apellido, [Validators.required]);

    this.modifyForm = new FormGroup({
      name: this.name,
      lastName: this.lastName,
    })
  }

}
