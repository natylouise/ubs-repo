/* Fundo geral da página */
body {
  background-color: #f4f4f4;
  font-family: 'Arial', sans-serif;
}

/* Estilização do container do login */
.login-container {
  height: 80vh; 
  border-radius: 30px; 
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #007bff, #003d84); /* Gradiente no fundo */
}

/* Estilo do card */
.card {
  background-color: #ffffff;
  border: none;
  border-radius: 20px; 
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 500px; 
}

/* Título do formulário */
.card h3 {
  font-size: 1.8rem;
  font-weight: bold;
  color: #003d84;
  margin-bottom: 1.5rem;
  text-align: center;
}

/* Estilo dos labels */
.card .form-label {
  font-weight: bold;
  color: #333333;
  margin-bottom: 0.5rem;
}

/* Inputs */
.card .form-control {
  border-radius: 15px; 
  border: 1px solid #cccccc;
  padding: 0.8rem;
  font-size: 1rem;
  color: #333333;
}

.card .form-control:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Efeito ao focar */
  outline: none;
}

/* Botão de login */
.card .btn-primary {
  background-color: #003d84;
  border: none;
  border-radius: 20px; /* Botão arredondado */
  padding: 0.8rem;
  font-size: 1.2rem;
  font-weight: bold;
  width: 100%;
  transition: background-color 0.3s ease;
}

.card .btn-primary:hover {
  background-color: #002b5e;
}

/* Estilização extra para botões secundários */
.btn {
  border-radius: 20px; 
  padding: 10px 20px;
  font-size: 1rem;
}


@media (max-width: 768px) {
  .card {
    padding: 1.5rem;
  }

  .card h3 {
    font-size: 1.5rem;
  }
}
select.form-control {
  cursor: pointer;
}
