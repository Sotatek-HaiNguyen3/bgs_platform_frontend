import ButtonSubmit from "containers/AsStudentOrCompany/components/button-submit";
import React, { useState } from "react";
import ItemQuestion from "./components/item-question";
import style from "./style.module.scss";

export default function MentorTalking() {
  const listQuestion = [
    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pharetra, suspendisse volutpat, donec justo, ipsum consequat, ac?",
      answer: "Lorem ipsum lorem ipsum",
      answer1: "Lorem ipsum lorem ipsum",
      answer2: "Lorem ipsum lorem ipsum",
      answer3: "Lorem ipsum lorem ipsum",
    },
    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pharetra, suspendisse volutpat, donec justo, ipsum consequat, ac?",
      answer: "Lorem ipsum lorem ipsum",
      answer1: "Lorem ipsum lorem ipsum",
      answer2: "Lorem ipsum lorem ipsum",
      answer3: "Lorem ipsum lorem ipsum",
    },
    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pharetra, suspendisse volutpat, donec justo, ipsum consequat, ac?",
      answer: "Lorem ipsum lorem ipsum",
      answer1: "Lorem ipsum lorem ipsum",
      answer2: "Lorem ipsum lorem ipsum",
      answer3: "Lorem ipsum lorem ipsum",
    },
    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pharetra, suspendisse volutpat, donec justo, ipsum consequat, ac?",
      answer: "Lorem ipsum lorem ipsum",
      answer1: "Lorem ipsum lorem ipsum",
      answer2: "Lorem ipsum lorem ipsum",
      answer3: "Lorem ipsum lorem ipsum",
    },
    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pharetra, suspendisse volutpat, donec justo, ipsum consequat, ac?",
      answer: "Lorem ipsum lorem ipsum",
      answer1: "Lorem ipsum lorem ipsum",
      answer2: "Lorem ipsum lorem ipsum",
      answer3: "Lorem ipsum lorem ipsum",
    },
  ];

  const [listAnswer, setListAnswer] = useState([]);

  const onChange = (key, value) => {
    const newListAnswer = [...listAnswer];
    const validItem = newListAnswer.findIndex((x) => x.key === key);
    if (validItem !== -1) {
      newListAnswer.splice(validItem, 1, {
        ...newListAnswer[validItem],
        value: value,
      });
    } else {
      newListAnswer.push({
        key,
        value,
      });
    }
    setListAnswer(newListAnswer);
  };

  const getItemChecked = (index) => {
    const newListAnswer = [...listAnswer];
    const validCheck = newListAnswer.findIndex((x) => x.key === index);
    if (validCheck !== -1) {
      return newListAnswer[validCheck];
    } else {
      return {
        key: index,
        value: `${index}-answer`,
      };
    }
  };

  return (
    <div className={style.mentorTalkingWrapper}>
      <div className={style.listQuestion}>
        {listQuestion.map((item, index) => {
          return (
            <ItemQuestion
              itemActive={getItemChecked(index)}
              key={index}
              item={item}
              index={index}
              onChange={onChange}
            />
          );
        })}
        <div className={style.buttonView}>
          <ButtonSubmit className={style.customButton} title="Submit for grading"/>
        </div>
      </div>
    </div>
  );
}
