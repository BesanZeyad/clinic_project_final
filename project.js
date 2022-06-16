    let  appointments =[];
class addAppointemtn { 
    idPatinet; 
    date; 
    time; 
     
    constructor(idPatinet,date,time){ 
        this.setIdpatinet(idPatinet); 
        this.setDate(date); 
        this.setTime(time);  
    } 
 
     
    #isValidId(number){ 
        if(typeof number !== 'number'){ 
         throw new Error('u must be num'); 
        } 
    } 
    setIdpatinet(idPatinet){ 
        this.#isValidId(idPatinet); 
        this.idAppointemtn; 
    } 
    setDate(date){ 
        this.date=date; 
    } 
    setTime(time){ 
        this.time=time; 
    } 
     
    getIdAppointemtn(){ 
        return this.idAppointemtn; 
    } 
     
    getDate(){ 
        return this.date; 
    } 
 
    getTime(){ 
        return this.time; 
    } 
    } 
     
class AddPatinet{ 
        name; 
        idPatinet; 
        gender; 
        age; 
        address; 
        mobileNumber; 
     
        constructor(name ,idPatinet,gender,age,address, mobileNumber) 
        { 
            this.setName(name); 
            this.setIdpatinet(idPatinet); 
            this.setGender(gender); 
            this.setAge(age); 
            this.setAddress(address); 
            this.setMobileNumber(mobileNumber); 
     
        } 
        #isValidName(name){ 
            if(typeof name !== 'string'){ 
             throw new Error('you must enter string'); 
            } 
        } 
 
        #isvalidGender(gender){ 
            if(gender !== 'mael'  || gender !== 'femael'  ){ 
                throw new Error('you must enter mael or femael '); 
               } 
        } 
        
        #isValidMobileNumber(number){ 
            if(typeof number !== 'number' && number.length!==10){ 
             throw new Error('you Must enter number and the length of number = 10'); 
            } 
        } 
        #isValidAge(age){ 
            if(typeof age !== 'number'){ 
             throw new Error('u must be num'); 
            } 
        } 
        setName(name){ 
            this.#isValidName(name); 
            this.name=name; 
        } 
         
        setIdpatinet(idPatinet){ 
            this.idPatinet=idPatinet; 
        } 
     
        setGender(gender){ 
            this.#isvalidGender(gender); 
            this.gender=gender; 
        } 
     
        setAge(age){ 
            this.#isValidAge(age); 
            this.age=age; 
        } 
     
        setAddress(address){ 
            this.address=address; 
        } 
     
        setMobileNumber(mobileNumber){ 
            this.#isValidMobileNumber(mobileNumber); 
            this.mobileNumber=mobileNumber; 
        } 
     
        getName(){ 
            return this.name; 
        } 
     
        getIdpatinet(){ 
            return ti.idPatinet; 
        } 
     
        getGender(){ 
            return this.gender; 
        } 
     
        gerAge(){ 
            return this.age; 
        } 
     
        getAddress(){ 
            return this.address; 
        } 
     
        getMobileNumber(){ 
            return this.mobileNumber; 
        } 
    } 
     
function Treatment() { 
      
    }

function AddAppointment( idPatinet,date,time )
{
  const Appointement=  new addAppointemtn(idPatinet,date,time);
  appointments.push(Appointement);

}

AddAppointment(125,22/11/2022,3);

function ListA(){
  for(let i =0; i<appointmentList.length;i++)
  {
    console.log(appointmentList[i]);
  }
}

    
    
    