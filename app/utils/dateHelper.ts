export const getAge = (_birthDate: string): string => {
    const birthDateArray = _birthDate.split('-');
  
    const birthDate = new Date(
      parseInt(birthDateArray[0], 10),
      parseInt(birthDateArray[1], 10) - 1,
      parseInt(birthDateArray[2], 10),
    );
  
    const ageDifference = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifference);
  
    return `${Math.abs(ageDate.getUTCFullYear() - 1970)} y`;
  };
  
  export const formateDate = (_birthDate: string): string => {
    getAge(_birthDate);
  
    const birthDateArray = _birthDate.split('-');
  
    const date = new Date(
      parseInt(birthDateArray[0], 10),
      parseInt(birthDateArray[1], 10) - 1,
      parseInt(birthDateArray[2], 10),
    );
  
    // short month name
    const month = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ][date.getMonth()];
    // short year
    const year = date.getFullYear().toString().substring(2);
  
    return `${date.getDate()} ${month}, ${year}`;
  };