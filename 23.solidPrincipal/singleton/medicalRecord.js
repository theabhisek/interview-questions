class MedicalRecordSystem {
    static instance = null;
    static getInstance() {
        if (!MedicalRecordSystem.instance) {
          MedicalRecordSystem.instance = new MedicalRecordSystem();
        }
        return MedicalRecordSystem.instance;
    }

    constructor(){
        if(MedicalRecordSystem.instance){
            throw new Error("This class is singleton")
        }
        this.record = new Map();
    }
    
    addPatient(id, record){
        if(!this.record.has(id)){
         console.log("Creating New Patient");
         this.record.set(id, record);
         console.log(this.record);
        } 
    }

    getRecord(){
        return this.record.get('123');
    }
}

const medicalRecordSystem = MedicalRecordSystem.getInstance();
const medicalRecordSystem2 = MedicalRecordSystem.getInstance();
medicalRecordSystem2.addPatient('123', {"name": "shiva"}); // Fixed syntax error here

medicalRecordSystem.addPatient('123', {"name": "shiva"}); // Fixed syntax error here
console.log(medicalRecordSystem2.getRecord());
console.log(medicalRecordSystem==medicalRecordSystem2)