import { useEffect, useState } from "react";
import "./AddRoutineStyle.css";
import PopMessage from "../layout/PopMessage";

let nextKey = 0;

function AddRoutine() {
  const [nameTask, setNTask] = useState();
  const [timeTask, setTTask] = useState();
  const [task, setTask] = useState({
    hourTask: null,
    id: null,
  });

  function localStoAdd() {
    localStorage.setItem(nameTask, JSON.stringify(timeTask));
    let time = JSON.parse(localStorage.getItem(nameTask));
    time = Number(time);
    nextKey++;

    setTask({
      ...task,
      id: nextKey,
      hourTask: time,
    });

    setTTask("");
    setNTask("");
  }

  function handleClick(e) {
    e.preventDefault();

    return <PopMessage msg={'aDICIONADO A MESNAGEM'} />;
  }

  function localAdd(e) {
    e.preventDefault();

    if (timeTask === "" || nameTask === "") {
      alert("Digite algo");
    } else if (timeTask > 24 || timeTask < 0) {
      alert("Digite o horário certo (00h até 23h)");
    } else if (timeTask === undefined || nameTask === undefined) {
      alert("Digite algo");
    } else {
      localStoAdd();
    }
  }

  return (
    <>
      <h1>Crie sua rotina</h1>
      <form>
        <fieldset className="listInputs">
          <label htmlFor="taskHour">Informe a hora de sua tarefa</label>
          <input
            type="number"
            id="taskHour"
            value={timeTask}
            onChange={(e) => setTTask(e.target.value)}
          />
          <label htmlFor="taskName">Informe sua tarefa</label>
          <input
            type="text"
            id="taskName"
            value={nameTask}
            onChange={(e) => setNTask(e.target.value)}
          />
          <button className="addTask" onClick={handleClick}>
            Adicionar
          </button>
        </fieldset>
      </form>
    </>
  );
}

export default AddRoutine;
