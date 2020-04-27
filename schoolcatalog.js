class School {
  
  constructor(name,level,numberOfStudents){
    this._name=name;
    this._level=level;
    this._numberOfStudents=numberOfStudents;
  }
  
  get name(){
    return this._name;
  }
  get level(){
    return this._level;
  }
  
  get numberOfStudents(){
    return this._numberOfStudents;
  }
  set numberOfStudents(num){
    if(typeof(num) ==='string'){
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
    else
    this._numberOfStudents=num;
    
  }
  
  quickFacts(){
   console.log (`School ${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level `);
  }
  
  static pickSubstituteTeacher(substituteTeachers){
   
    let randomIndex=Math.floor(Math.random()*substituteTeachers.length);
    
    return substituteTeachers[randomIndex]; //it return randomly substitutae teacher.
    
  }
  
}


class PrimarySchool extends School{
  constructor(name,numberOfStudents,pickuppolicy){
    super(name,'primary',numberOfStudents);
    this._pickuppolicy=pickuppolicy;
    
  }
  get pickuppolicy(){
    return this._pickuppolicy;
  }
  
}

class MiddleSchool extends School{
  
  constructor(name,numberOfStudents){
    super(name,'middle',numberOfStudents);   
  }
  
}
  
  
class HighSchool extends School{
  
  constructor(name,numberOfStudents,sportsTeams){
    super(name,'High',numberOfStudents);  
    this._sportsTeams=sportsTeams;
    
  }
  
  get sportsTeams(){
    console.log(this._sportsTeams);
  }
  set sportsTeams(team){
    this._sportsTeams.push(team);
  }
  
}

class SchoolCatalog{
  
  constructor(){
    
    this._Mycatalog=[];
    
  }
  get Mycatalog(){
    return this._Mycatalog;
  }
  
  set Mycatalog(value){
    
    this._Mycatalog.push(value);
  }
  
  
}


const lorraineHansbury = new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));


const alSmith = new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);


alSmith.sportsTeams;


const Aps = new MiddleSchool('Apsacs',1200);
Aps.quickFacts();

const catalog1 = new SchoolCatalog();
catalog1.Mycatalog=lorraineHansbury;
catalog1.Mycatalog=alSmith;
catalog1.Mycatalog=Aps;

console.log(catalog1.Mycatalog);
