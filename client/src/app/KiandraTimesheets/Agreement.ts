import {Dependent} from "./Dependent";
export class Agreement implements Dependent{
    dependencies: Array<any> = [
        'Client',
        'GeneralITServicesAgreementType',
        'SupportAgreementType'
    ];
}