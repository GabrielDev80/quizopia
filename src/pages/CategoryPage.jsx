import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Question } from "../components/Question";
import { questions, imgs } from "../data";
import images from "../components/images";

const shuffleArray = (array) => {
  const newArray = array.sort(() => Math.random() - 0.5);
  return newArray.slice(0, 5);
};

export const CategoryPage = () => {
  // Leer el parametro de la URL
  const { category } = useParams();

  const imgCategory = images[category.toLowerCase()];

  const [questionsFiltered, setquestionsFiltered] = useState(
    questions.filter((questions) => questions.category === category)
  );
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [activeQuiz, setActiveQuiz] = useState(false);

  useEffect(() => {
    const newQuestions = shuffleArray(questionsFiltered);
    setquestionsFiltered(newQuestions);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <div
          className="w-full max-w-xl px-2 flex flex-col items-center justify-center gap-10 mt-8 mb-8"
          // style={{ height: "calc(100vh - 5rem)" }}
        >
          {activeQuiz ? (
            <Question
              filteredQuestion={questionsFiltered[indexQuestion]}
              setIndexQuestion={setIndexQuestion}
              indexQuestion={indexQuestion}
              questionsFiltered={questionsFiltered}
              setActiveQuiz={setActiveQuiz}
            />
          ) : (
            <>
              <div className="flex flex-col gap-5">
                <h1 className="text-xl md:text-3xl text-teal-900 text-center font-bold">
                  {category}
                </h1>
                <div className="flex justify-center items-center">
                  <img
                    src={imgCategory}
                    alt={category}
                    className="w-40 md:w-72"
                  />
                </div>
              </div>
              <button
                className="text-white bg-gray-900 py-2 px-5 rounded-lg font-bold transition-all hover:bg-yellow-500 hover:text-gray-900"
                onClick={() => setActiveQuiz(true)}
              >
                Iniciar Quiz
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
