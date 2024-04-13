import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import "../../styles/index.css";
import { Spiner } from "../component/Spiner.jsx";

export const References = () => {
  const { store, actions } = useContext(Context);

  return (store.references).length == 0 ? <Spiner /> : (
    <div id="page-top">
      {!store.isLogin ? (
        <h1>FORBIDEN</h1>
      ) : (
        <div className="container-fluid">
          <h1 className="h3 mb-2 text-gray-800">
            Referencias <i className="fa-solid fa-magnifying-glass"></i>{" "}
          </h1>
          <p className="mb-4">
            Tabla con las referencias actualizadas importadas de Gstock, recuerde que WOPR solo muestra las referenias que existen en Gstock, si quiere modificar, eliminar o dar de alta es necesario hacerlo desde la app de Gstock.
          </p>

          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Lista de Referencias</h6>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table
                  className="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellSpacing="0"
                >
                  <thead>
                    <tr>
                      <th>Id Wopr</th>
                      <th>Id Gstock</th>
                      <th>Nombre</th>
                      <th>Id Categoria</th>
                      <th>Id Familia</th>
                      <th>Id Tipo</th>
                      <th>Id Subtipo</th>
                      <th>Id Unidad Medida</th>
                      <th>Precio Ultima Compra</th>
                      <th>Precio Promedio</th>
                      <th>Id Unidad Mostrada</th>
                      <th>Equivalencia entre compra y mostrada</th>
                      <th>Activa</th>
                      <th>Fecha Creacion</th>
                      <th>Fecha modificacion</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Id Wopr</th>
                      <th>Id Gstock</th>
                      <th>Nombre</th>
                      <th>Id Categoria</th>
                      <th>Id Familia</th>
                      <th>Id Tipo</th>
                      <th>Id Subtipo</th>
                      <th>Id Unidad Medida</th>
                      <th>Precio Ultima Compra</th>
                      <th>Precio Promedio</th>
                      <th>Id Unidad Mostrada</th>
                      <th>Equivalencia entre compra y mostrada</th>
                      <th>Activa</th>
                      <th>Fecha Creacion</th>
                      <th>Fecha modificacion</th>
                    </tr>
                  </tfoot>
                  <tbody>
                  {store.references.map((row, idWopr) => (
                    <tr key={idWopr}>
                      <td>{row.idWopr}</td>
                      <td>{row.id}</td>
                      <td>{row.name}</td>
                      <td>{row.categoryId}</td>
                      <td>{row.familyId}</td>
                      <td>{row.typeId}</td>
                      <td>{row.subtypeId}</td>
                      <td>{row.measureUnitId}</td>
                      <td>{row.measurePriceLastPurchase}</td>
                      <td>{row.measurePriceAverage}</td>
                      <td>{row.displayUnitId}</td>
                      <td>{row.equivalenceBetweeenMeasureAndDisplay}</td>
                      <td>{row.active}</td>
                      <td>{row.creationDate}</td>
                      <td>{row.modificationDate}</td>
                    </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
