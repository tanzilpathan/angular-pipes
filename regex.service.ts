# numeric regex, alpha numeric regex regex, email regex, phone regex, name regex, percentage regex, date regex, pan regex, ifsc regex, pincode regex, city name regex, gst regex no etc regex.
export class RegexService {
  constructor() { }

  get nameRegex() {
    return "^[a-zA-Z0-9-.'\\s]*$"; // only alphanumic and space . '
  }
  get nameWithSpaceRegex() {
    return "^[a-zA-Z\\s]*$"; // only alpha and space . '

  }
  get Email() {
    return '^.+@.+\\..+$'; // contains @ and . with text surrounding
  }

  get Phone() {
    return '^[6-9][0-9]{9}$'; // max 20 chars, numbers and -
  }

  get Percentage() {
    return '^(100([\.][0]{1,})?$|[0-9]{1,2}([\.][0-9]{1,})?)$'
  }

  get Date() {
    return '^[0-9]{2}-[0-9]{2}-[0-9]{4}$'; // mm-dd-yyyy, all numbers
  }

  get Aadhar() {
    return '[0-9]{12}';
  }
  get chequeNumber() {
    return '[0-9]{6}';
  }
  get Pan() {
    return '^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$'
  }
  get Ifsc() {
    return '^[A-Za-z]{4}[a-zA-Z0-9]{7}$'
  }

  get Pincode() {
    return '^[0-9]{6}$'
  }
  get CityName() {
    return '^([a-zA-Z]+|[a-zA-Z]+\s[a-zA-Z]+)$'
  }
  get Name() {
    return '^[a-zA-Z]+(?:-[a-zA-Z]+)*$'
  }

  get OTP() {
    return '^[1-9][0-9]{5}$'
  }

  get UserName() {
    return "^[a-zA-Z-.'\\s]*$"; // only alphanumic and space
  }
  get FullName() {
    return "^[A-Z][a-zA-Z]{3,}(?: [A-Z][a-zA-Z]*){0,2}$";
  }

  get numberAndAlphabates() {
    return "^[a-zA-Z0-9]*$"; //number and alphabates only
  }

  get GstNo() {
    return '^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$'
  }
  get alphaNumeric() {
    return '^[a-zA-Z0-9_.-]*$'
  }
  get onlyAlphabets() {
    return '[a-zA-Z][a-zA-Z ]+'
  }

  NumberKeyEvent(event: any) {
    var ASCIICode = event.which ? event.which : event.keyCode;
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
    return true;
  }
  NumberKeyEvent1(event: any) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode >= 48 && charCode <= 57)) {
      return true;
    }
    else {
      return false;
    }
  }
  AlphaNumericSpaceHyphenOnly2(event: any): Boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || (charCode == 32) ||
      (charCode >= 48 && charCode <= 57) || (charCode == 47) || (charCode == 45)) {
      return true;
    }
    else {
      return false;
    }



  Alpha(event: any): Boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
      return true;
    }
    else {
      return false;
    }
  }
}
