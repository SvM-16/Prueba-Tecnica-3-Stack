import React, { useEffect, useState } from 'react';
import { useEmpleados } from '../context/empleadosContext.jsx';
import { useRoles } from '../context/rolesContext';
import { useAreas } from '../context/areasContext';
import { useForm } from 'react-hook-form';
import '../pages/empleados.css';

const Empleados = () => {
  const { empleados, getEmpleados, createEmpleado } = useEmpleados();
  // const { createEmpleado } = React.useContext(EmpleadoContext)
  const { roles, getRoles } = useRoles();
  const { areas, getAreas } = useAreas();
  const [rolesSeleccionados, setRolesSeleccionados] = useState([]); // Corrección en esta línea
  const { register, handleSubmit } = useForm();

  useEffect(() => {
  //  getEmpleados();
    getAreas();
    getRoles();
  }, []);

  const handleRolchange = (rolesId) => {
    if (rolesSeleccionados && rolesSeleccionados.includes(rolesId)) {
      setRolesSeleccionados(rolesSeleccionados.filter((id) => id !== rolesId));
    } else {
      setRolesSeleccionados([...rolesSeleccionados, rolesId]);
    }
  };

  const onSubmit = handleSubmit( async (data)=> {
    const empleadoData = {
      nombre: data.nombre,
      email: data.email,
      sexo: data.sexo,
      area_id: data.area_id,
      boletin: data.boletin,
      descripcion: data.descripcion,
      roles: rolesSeleccionados,
    };
    createEmpleado(empleadoData);
  });

  return (
    <div>
      <form action="" onSubmit={onSubmit}>
          <div className='nombre'>
            <label htmlFor="Nombre">Nombre Completo * </label>
            <input type="text" id='Nombre' {...register("nombre")} placeholder='Nombre completo del empleado' />
          </div>
          <div className='corre'>
            <label htmlFor="Correo">Corre electronico * </label>
            <input type="text" id='correo' {...register("email")} placeholder='Correo electronico' />
          </div>
          <div className="sexo">
            <label className="">Sexo * </label>
            <div className="flex flex-col">
              <label htmlFor="masculino">Masculino 
                <input type="radio" id="masculino" {...register("sexo")} value="M" />
              </label>
              <label htmlFor="femenino">Femenino 
                <input type="radio" id="femenino" {...register("sexo")} value="F"/>
              </label>
            </div>
          </div>
          <div className='areas'>
            <label htmlFor="area">Area * </label>
            <select name='areas' id='areas' {...register("area_id")}>
              {areas.map((area)=>(
                <option key={area.id} value={area.id}>
                  {area.nombre}
                </option>
              ))}
            </select> 
          </div>
          <div className='descripcion flex'>
            <label htmlFor="descripcion">Descripción * </label>
              <div className='flex flex-col'>
                <textarea name="" id="" cols="" rows="" placeholder='Descripción de la experiencia del empleado' {...register("descripcion")}></textarea>
                <div className='flex'>
                  <input type="checkbox" id='boletin' {...register("boletin")} />
                  <label htmlFor="boletin">Desea recibir el boletin informativo</label>
                </div>
              </div>
          </div>
          <div className='roles flex'>
                <label htmlFor="roles">Roles * </label>
                <div className='flex flex-col'>
                {roles.map((role)=>(
                  <div key={role.id} >
                    <label htmlFor="rol">
                      <input type="checkbox" name="" id="" checked={rolesSeleccionados && rolesSeleccionados.includes(role.id)} onChange={() => handleRolchange(role.id)}/>
                      {role.nombre}
                    </label>
                    <input type="hidden" name="roles" value={role.id} {...register(`boletin[${role.id}]`)} />
                  </div>
                ))}
                </div>
          </div>
          <button>Guardar</button>
      </form>
    </div>
  );
};


export default Empleados;