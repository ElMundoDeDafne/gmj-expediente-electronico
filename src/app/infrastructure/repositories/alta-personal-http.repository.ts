import { Injectable } from "@angular/core";
import { AltaPersonalRepository } from "../../core/repositories/alta-personal.repository";
import { AltaPersonalDTO } from "../../modules/personal/interfaces/alta-personal.interface";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AltaPersonalHttpRepository extends AltaPersonalRepository {
  constructor(private http: HttpClient) {
    super();
  }


  override registrarNuevoPersonal(altaPersonalDTO: AltaPersonalDTO): void {
    throw new Error("Method not implemented.");
  }

}
