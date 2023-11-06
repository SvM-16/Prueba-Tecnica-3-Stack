import React, { useEffect, useState } from 'react';
import { useEmpleados } from '../context/empleadosContext.jsx';
import { useRoles } from '../context/rolesContext';
import { useAreas } from '../context/areasContext';
import { useForm } from 'react-hook-form';
import {MdDelete, MdOutlineEmail, MdOutlineAlternateEmail} from 'react-icons/md'
import {BiEdit} from 'react-icons/bi'
import {FaBriefcase} from 'react-icons/fa'
import  {BsGenderAmbiguous} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import '../pages/empleados.css';

const Empleados = () => {
  const { empleados, getEmpleados, createEmpleados, deleteEmpleado  } = useEmpleados();
  const { roles, getRoles } = useRoles();
  const { areas, getAreas } = useAreas();
  const [rolesSeleccionados, setRolesSeleccionados] = useState([]);
  const { register, handleSubmit } = useForm();
  const [quiereBoletin, setQuiereBoletin] = useState(false);

  useEffect(() => {
   getEmpleados();
    getAreas();
    getRoles();
  }, []);

  const areaNameMap = areas.reduce((acc, area) => {
    acc[area.id] = area.nombre;
    return acc;
  }, {});

  const handleQuiereBoletinChange = (event) => {
    setQuiereBoletin(event.target.checked);
  };

  const handleDeleteEmpleado = (empleadoId) => {
    deleteEmpleado(empleadoId);
  }

  const handleRolchange = (rolesId) => {
    if (rolesSeleccionados && rolesSeleccionados.includes(rolesId)) {
      setRolesSeleccionados(rolesSeleccionados.filter((id) => id !== rolesId));
    } else {
      setRolesSeleccionados([...rolesSeleccionados, rolesId]);
    }
  };

  const onSubmit = handleSubmit((data)=> {
    const empleadoData = {
      nombre: data.nombre,
      email: data.email,
      sexo: data.sexo,
      area_id: data.area_id,
      descripcion: data.descripcion,
      boletin: quiereBoletin ? 1 : 0,
    };
    createEmpleados(empleadoData);
  });

  return (
    <div className='general'>
      <form className='formulario' action="" onSubmit={onSubmit}>
      <div className="info">
          <span>Los campos con (*) son obligatorios</span>
      </div>
          <div className='nombre'>
            <label htmlFor="Nombre">Nombre Completo * </label>
            <input type="text" id='Nombre' className='nombre-input' {...register("nombre")} placeholder='Nombre completo del empleado' />
          </div>
          <div className='correo'>
            <label htmlFor="Correo">Correo electronico * </label>
            <input type="text" id='correo' className='correo-input' {...register("email")} placeholder='Correo electronico' />
          </div>
          <div className="flex">
            <label className="sexo">Sexo * </label>
            <div className="flex flex-col">
              <label htmlFor="masculino">Masculino 
                <input type="radio" id="masculino" className='mascu-input' {...register("sexo")} value="M" />
              </label>
              <label htmlFor="femenino">Femenino 
                <input type="radio" id="femenino" className='mascu-input' {...register("sexo")} value="F"/>
              </label>
            </div>
          </div>
          <div>
            <label htmlFor="area" className='area'>Area * </label>
            <select name='areas' id='areas' className='areas' {...register("area_id")}>
              {areas.map((area)=>(
                <option key={area.id} value={area.id}>
                  {area.nombre}
                </option>
              ))}
            </select> 
          </div>
          <div className='flex'>
            <label htmlFor="descripcion" className='descripcion'>Descripción * </label>
              <div className='flex flex-col'>
                <textarea name="" id="" cols="" rows="" className="descripcion-tex" placeholder='Descripción de la experiencia del empleado' {...register("descripcion")}></textarea>
                <div className='flex'>
                  <input type="checkbox" id='boletin' className='boletin-input' onChange={handleQuiereBoletinChange} />
                  <label htmlFor="boletin" className='boletin'>Desea recibir el boletin informativo</label>
                </div>
              </div>
          </div>
          <div className='flex'>
                <label htmlFor="roles" className='roles'>Roles *  </label>
                <div className='flex flex-col'>
                {roles.map((role)=>(
                  <div key={role.id} className='rol' >
                      <input type="checkbox" name="" id="" className='rol-input' checked={rolesSeleccionados && rolesSeleccionados.includes(role.id)} onChange={() => handleRolchange(role.id)}/>
                      {role.nombre}
                    <input type="hidden" name="roles" value={role.id} {...register(`boletin[${role.id}]`)} />
                  </div>
                ))}
                </div>
          </div>
          <button className='buton-guardadr'>Guardar</button>
      </form>
      <table className='tabla'>
      <tr className='emple'>
          <th><div className='icono'><AiOutlineUser/>Nombre</div></th>
          <th><div className='icono'><MdOutlineAlternateEmail/>Email</div></th>
          <th><div className='icono'><BsGenderAmbiguous/>Sexo</div></th>
          <th><div className='icono'><FaBriefcase/>Area</div></th>
          <th><div className='icono'><MdOutlineEmail/>Boletin</div></th>
          <th >Modificar</th>
          <th>Eliminar</th>
      </tr>
        {empleados.map((empleado, index) => (
          <tr key={empleado.id} className={index % 2 === 0 ? 'fila-par' : 'fila-impar'}>
            <td>{empleado.nombre}</td>
            <td>{empleado.email}</td>
            <td>{empleado.sexo}</td>
            <td>{areaNameMap[empleado.area_id]}</td>
            <td>{empleado.boletin}</td>
            <td><button><div><BiEdit /></div></button></td>
            <td><button><div><MdDelete className='delete' onClick={() => handleDeleteEmpleado(empleado.id)} /></div></button></td>
          </tr>
        ))}
      </table>
    </div>
  );
};


export default Empleados;