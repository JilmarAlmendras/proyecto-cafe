"use client";

import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import Link from "next/link";

function VentaEnLinea() {
  return (
    <div className="flex flex-col  gap-10 pt-5">
      <div className="flex  justify-between">
        <h1 className="text-3xl font-bold">Informacion de pago</h1>
      </div>
      <div className="flex justify-center">
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-lg uppercase font-bold">Metodo de pago</p>
            <small className="text-default-500">VISA</small>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <p>Numero de tarjeta</p>
                <Input type="number" />
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col gap-2">
                  <p>Fecha de expiracion</p>
                  <div className="flex gap-2">
                    <Input type="number" />
                    <Input type="number" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p>Codigo de seguridad</p>
                  <Input type="number" />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-lg font-bold">INFORMACIÓN DE FACTURACIÓN</p>
              <div className="flex flex-col gap-2">
                <div className="flex gap-4">
                  <div className="flex flex-col gap-2">
                    <p>Nombre</p>
                    <Input type="text" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>Apellido</p>
                    <Input type="text" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>Ciudad</p>
                    <Input type="text" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p>Correo electronico</p>
                  <Input type="email" />
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col gap-2">
                    <p>Codigo postal</p>
                    <Input type="number" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>Dirección</p>
                    <Input type="text" />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col gap-2">
                    <p>Pais</p>
                    <Input type="text" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>Numero telefonico</p>
                    <Input type="number" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <Button href="/realizar-ventas" as={Link} color="primary">
                Continuar
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
export default VentaEnLinea;
