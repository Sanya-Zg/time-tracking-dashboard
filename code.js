const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');

const workText = document.getElementById('workText');
const playText = document.getElementById('playText');
const studyText = document.getElementById('studyText');
const exerciseText = document.getElementById('exerciseText');
const socialText = document.getElementById('socialText');
const selfcareText = document.getElementById('selfcareText');

const titleWork = document.getElementById('title_work');
const titlePlay = document.getElementById('title_play');
const titleStudy = document.getElementById('title_study');
const titleExercise = document.getElementById('title_exercise');
const titleSocial = document.getElementById('title_social');
const titleSelfCare = document.getElementById('title_selfCare');

const buttonsAll = [
  daily, weekly, monthly
]
buttonsAll.forEach(button => {
  button.addEventListener('click', () => {
    buttonsAll.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  })
})

fetch('./data.json') 
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    
   const titleArr = [
    titleWork,
    titlePlay,
    titleStudy,
    titleExercise,
    titleSocial,
    titleSelfCare
   ]

   titleArr.forEach((el, index) => el.innerHTML = data[index].title);

    const containersOfText = [
        workText,
        playText,
        studyText,
        exerciseText,
        socialText,
        selfcareText
      ]

      data.forEach((element, index) => {
        // ----Create----
        const header = document.createElement('h2');
        const par = document.createElement('p');
        // ----Update----
        header.innerHTML = `${element.timeframes.daily.current}hrs`;
        par.innerHTML = `Last Week - ${element.timeframes.daily.previous}hrs`;
        // -----Add-----
        containersOfText[index].append(header, par);
      });

    daily.addEventListener('click', () => {  

      containersOfText.forEach(el => el.innerHTML = '');

      data.forEach((element, index) => {
        // ----Create----
        const header = document.createElement('h2');
        const par = document.createElement('p');
        // ----Update----
        header.innerHTML = `${element.timeframes.daily.current}hrs`;
        par.innerHTML = `Last Week - ${element.timeframes.daily.previous}hrs`;
        // -----Add-----
        containersOfText[index].append(header, par);
      });
    })
    weekly.addEventListener('click', () => {  

      containersOfText.forEach(el => el.innerHTML = '');

      data.forEach((element, index) => {
        // ----Create----
        const header = document.createElement('h2');
        const par = document.createElement('p');
        // ----Update----
        header.innerHTML = `${element.timeframes.weekly.current}hrs`;
        par.innerHTML = `Last Week - ${element.timeframes.weekly.previous}hrs`;
        // -----Add-----
        containersOfText[index].append(header, par);
      });
    })
    monthly.addEventListener('click', () => {  

      containersOfText.forEach(el => el.innerHTML = '');

      data.forEach((element, index) => {
        // ----Create----
        const header = document.createElement('h2');
        const par = document.createElement('p');
        // ----Update----
        header.innerHTML = `${element.timeframes.monthly.current}hrs`;
        par.innerHTML = `Last Week - ${element.timeframes.monthly.previous}hrs`;
        // -----Add-----
        containersOfText[index].append(header, par);
      });
    })
  })
  .catch(error => {
    console.error('Помилка при завантаженні JSON:', error);
  });
