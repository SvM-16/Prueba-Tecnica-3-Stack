import { useEffect, useState } from 'react';
import { useEmpleados } from '../context/empleadosContext';
import { useRoles } from '../context/rolesContext';
import { useAreas } from '../context/areasContext';
import { useForm } from 'react-hook-form'
import '../pages/empleados.css'

const Empleados = () => {
  const { empleados, getEmpleados, createEmpleado} = useEmpleados();
  const { roles, getRoles } = useRoles();
  const { areas, getAreas } = useAreas();
  const { rolesSeleccionados, setRolesSeleccionados } = useState([]);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    getEmpleados();
    getAreas();
    getRoles();
  }, []);

  const handleRolchange = (rolesId) => {
    if(rolesSeleccionados.includes(rolesId)){
      setRolesSeleccionados(rolesSeleccionados.filter((id) => id !== rolesId));
    } else {
      setRolesSeleccionados([...rolesSeleccionados, rolesId]);
    }
  };

  const onSubmit = handleSubmit((data) => {
    const empleadoData = {
      nombre: data.nombre,
      email: data.email,
      sexo: data.sexo,
      area_id: data.area_id,
      decripcion: data.descripcion,
      roles: rolesSeleccionados,
    };
    createEmpleado(empleadoData)
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
            <div className="flex mb-4">
              <label className="block mr-4">Sexo * </label>
              <div className="flex flex-col">
                <label htmlFor="masculino">Masculino 
                  <input type="radio" id="masculino" name="sexo" value="M" />
                </label>
                <label htmlFor="femenino" className="mb-1">Femenino 
                  <input type="radio" id="femenino" name="sexo" value="F"/>
                </label>
              </div>
            </div>
        </form>
      </div>
    );

  }

export default Empleados;