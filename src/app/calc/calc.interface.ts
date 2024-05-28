
export interface SurveyInterface {
    id: number;
    name: string;
    title: string;
    list: StringArray[];
}

interface StringArray {
    [index: number] : string;
}
