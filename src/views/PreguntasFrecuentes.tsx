import { useState } from 'react';
import preguntasFrecuentes from '../assets/PreguntasFrecuentes.js'; // Importa el array
import Layout from '../components/Layout'; // Importa el Layout
import styles from './PreguntasFrecuentes.module.css'; // Estilos del componente

const PreguntasFrecuentes = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Función para manejar la visibilidad de las respuestas
  const toggleAnswer = (index: number) => {
    if (index === activeIndex) {
      setActiveIndex(null); // Si la respuesta ya está abierta, la cerramos
    } else {
      setActiveIndex(index); // Abrimos la respuesta correspondiente
    }
  };

  return (
    <Layout> {/* Aquí se utiliza el Layout global */}
      <div className={styles["preguntasFrecuentes-container"]}>
        <h1 className={styles["title-faq"]}>Preguntas Frecuentes</h1>
        <div className={styles["faq-list"]}>
          {preguntasFrecuentes.map((item, index) => (
            <div key={index} className={styles["faq-item"]}>
              <div className={styles["faq-question-container"]}>
                <h3
                  className={styles["faq-question"]}
                  onClick={() => toggleAnswer(index)}
                >
                  {item.pregunta}
                </h3>
              </div>
              {activeIndex === index && (
                <p className={styles["faq-answer"]}>{item.respuesta}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PreguntasFrecuentes;
