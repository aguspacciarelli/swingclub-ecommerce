import styles from '@/app/components/Cart/Cart.module.css'

const FormCheckout = () => {
  return (
    <div>
      <form className={styles["form"]}>
      <strong>Datos de tarjeta</strong>
        <div className={styles["tarjeta"]}>
          <input
            type='text'
            id='nombre-tarjeta'
            name='nombre-tarjeta'
            placeholder='Nombre'
            required
          className={styles["mitad"]}/>
          <input
            type='text'
            id='apellido-tarjeta'
            name='apellido-tarjeta'
            placeholder='Apellido'
            className={styles["mitad"]}
            required
          />
          <input
            type='text'
            id='numero-tarjeta'
            name='numero-tarjeta'
            placeholder='Número de tarjeta'
            className={styles["mitad"]}
            required
          />
          <input type='password' id='pin' name='pin' placeholder='PIN' className={styles["mitad"]} required />
          <select id='mes-vencimiento' name='mes-vencimiento' className={styles["mitad"]} required>
            <option value=''>Mes de vencimiento</option>
            <option value='01'>01</option>
            <option value='02'>02</option>
            <option value='02'>03</option>
            <option value='02'>04</option>
            <option value='02'>05</option>
            <option value='02'>06</option>
            <option value='02'>07</option>
            <option value='02'>08</option>
            <option value='02'>09</option>
            <option value='02'>10</option>
            <option value='02'>11</option>
            <option value='02'>12</option>
          </select>
          <select id='anio-vencimiento' name='anio-vencimiento' className={styles["mitad"]} required>
            <option value=''>Año de vencimiento</option>
            <option value='2024'>2024</option>
            <option value='2025'>2025</option>
          </select>
        </div>

        <strong>Datos de entrega</strong>
        <div className={styles["entrega"]}>
          <input
            type='text'
            id='nombre-entrega'
            name='nombre-entrega'
            placeholder='Nombre'
            className={styles["mitad"]}
            required
          />
          <input
            type='text'
            id='apellido-entrega'
            name='apellido-entrega'
            placeholder='Apellido'
            className={styles["mitad"]}
            required
          />
          <input type='text' id='calle' name='calle' placeholder='Calle' className={styles["full"]} required />
          <input type='text' id='numero' name='numero' placeholder='Número' className={styles["mitad"]} required />
          <input type='text' id='piso' name='piso' placeholder='Piso (Opcional)' className={styles["mitad"]} />
          <input type='text' id='ciudad' name='ciudad' placeholder='Ciudad' className={styles["mitad"]} required />
          <input type='text' id='localidad' name='localidad' placeholder='Localidad' className={styles["mitad"]} required />
          <input type='text' id='codigo-postal' name='codigo-postal' placeholder='Código postal' className={styles["mitad"]} required />
          <select id='pais' name='pais' placeholder='País' className={styles["mitad"]} required>
            <option value=''>País</option>
            <option value='argentina'>Argentina</option>
            <option value='chile'>Chile</option>
            <option value='brasil'>Brasil</option>
            <option value='ecuador'>Ecuador</option>
            <option value='bolivia'>Bolivia</option>
            <option value='peru'>Perú</option>
            <option value='paraguay'>Paraguay</option>
            <option value='uruguay'>Uruguay</option>
            <option value='colombia'>Colombia</option>
            <option value='venezuela'>Venezuela</option>
          </select>
        </div>

        <button class='full-width' type='submit'>
          Comprar
        </button>
      </form>
    </div>
  );
};

export default FormCheckout;
