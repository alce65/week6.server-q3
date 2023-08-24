import inquirer from 'inquirer';

const courses = ['Angular', 'React', 'Node'];

type Answers = {
  userName: string;
  age: number;
  course: string;
  multiCourse: string[];
  isAccepted: boolean;
};

const getData = async () => {
  const answers: Answers = await inquirer.prompt([
    {
      name: 'userName',
      message: 'Dime tu nombre',
      type: 'input',
    },
    {
      name: 'age',
      message: 'Dime tu edad',
      type: 'number',
    },
    {
      name: 'course',
      message: 'Selecciona un curso',
      type: 'list',
      choices: courses,
    },
    {
      name: 'multiCourse',
      message: 'Selecciona cursos',
      type: 'checkbox',
      choices: courses,
    },
    {
      name: 'isAccepted',
      message: 'Aceptas....',
      type: 'confirm',
    },
  ]);

  if (isNaN(answers.age)) {
    getData();
  } else {
    Object.entries(answers).forEach(([k, v]) =>
      console.log(k.toUpperCase(), ':', v)
    );
  }
};

getData();
