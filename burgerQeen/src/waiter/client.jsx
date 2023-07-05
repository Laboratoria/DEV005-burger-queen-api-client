import PropTypes from 'prop-types';

const ClientName = ({ clientValue, setClientValue }) => {
  const inputValue = (event) => {
    setClientValue(event.target.value);
  };

  return (
    <>
      <div className='container-waiter'>
        <section className='client-credentials'>
          <div className='container-input-btn'>
            <input
              type='text'
              placeholder='Nombre del Cliente'
              className='input-name'
              value={clientValue}
              onChange={inputValue}
            />
          </div>
          <p className='clientName'>Cliente: {clientValue}</p>
        </section>
      </div>
    </>
  );
};

ClientName.propTypes = {
  clientValue: PropTypes.string,
  setClientValue: PropTypes.func,
};

export default ClientName;









