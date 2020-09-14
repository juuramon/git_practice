const daysOfWeek = {
    'monday': 8, 
    'tuesday' : 10, 
    'wedneday' : 7, 
    'thursday': 8, 
    'friday': 4, 
    'saturday': 8, 
    'sunday':12};
  
  // const getSleepHours = (day) => {
  //   switch (day){
  //     case 'monday':
  //       return 9;
  //       break;
  //     case 'tuesday':
  //       return 7;
  //       break;
  //     case 'wedneday':
  //       return 9;
  //       break;
  //     case 'thursday':
  //       return 7;
  //       break;
  //     case 'friday':
  //       return 4;
  //       break;
  //           case 'saturday':
  //       return 10;
  //       break;
  //           case 'sunday':
  //       return 9;
  //       break;
  //   }
  // }
  
  const getActualSleepHours = () => {
    var sum = 0;
    for ( const x in daysOfWeek ) {
    sum += daysOfWeek[x];
    } return sum;
  }
  
  const getIdealSleepHours  = idealHours => {
    return idealHours * 7;
  }
  
  const calculateSleepDebt = idealHours => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(idealHours);
    if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep.')
    }
    else if (actualSleepHours > idealSleepHours) {
      console.log('You got more sleep than needed.')
    } else {
      console.log('You should get some rest.')
    }
     console.log(`You have slept for ${actualSleepHours} hours.`);
     console.log(`but you should sleep for ${idealSleepHours} hrs.`);
  }
  
  calculateSleepDebt(8)