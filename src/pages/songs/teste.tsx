import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Teste() {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null); // Altere o tipo conforme necessário

  useEffect(() => {
    // Função para salvar dados
    const saveData = () => {
      console.log('Salvando dados...');
      // Coloque a lógica para salvar os dados aqui
      localStorage.setItem('data', JSON.stringify(data));
    };

    // Detecta mudança de rota e salva dados
    const currentPath = location.pathname;

    return () => {
      if (currentPath === '/sua-rota-especifica') {
        saveData();
      }
    };
  }, [location, data]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData(event.target.value); // Atualize os dados conforme necessário
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={data || ''} />
      <button onClick={() => navigate('/songs')}>Ir para outra rota</button>
    </div>
  );
}
