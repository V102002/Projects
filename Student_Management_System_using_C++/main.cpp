#include<iostream>
#include<string.h>
#include<stdio.h>
#include<stdlib.h>
#include<windows.h>
#include<conio.h>
#include<cstring>
#include<fstream>
using namespace std;

class student {
    char name[30];
    int Roll_no;
    int age;
    char Pname[30];
    char stdn[10];
    int busno;
    string convert(string s){
      for (int i = 0; i < s.length(); i++){
        s[i]=toupper(s[i]);
      }
      return s;
    }
public:
    void intro();
    void loadingBar();
    void login();
    void getdata();
    void showdata();
    int storedata();
    void viewAlldata();
    void searchDataBase(char *);
    void showsearch();
    void deleteData(char *);
    void updateData(char *);
    
    student() {
        Roll_no=0;
        age=0;
        busno=0;
        strcpy(name,"no name");
        strcpy(Pname,"no name");
        strcpy(stdn,"not found");
    }
};

void student::intro() {
    cout<<"*****************************************************************\n"
        <<"***************    STUDENT MONITORING SYSTEM     ********************\n"
        <<"_____________________________________________________________________\n\n";
    getch();
}

void student::loadingBar() {
    cout << "\n\n\n\n\n\n\n\t\t\tLoading...\n";
    cout << "\t\t\t[";
    int width = 50;
    for (int i = 0; i <= width; i++) {
        int percent = (i * 100) / width;
        cout << "\r\t\t\t[";
        for (int j = 0; j < i; j++) cout << "=";
        for (int j = i; j < width; j++) cout << " ";
        cout << "] " << percent << "%";
        Sleep(50);
    }
    cout << "\n";
    system("cls");
}

void student::login() {
    char ui[]="ASHFAQUE";
    char psw[]="3535";
    char gui[10],gpsw[10];
    // Login logic (optional to implement)
}

void student::getdata() {
    cin.ignore();
    cout<<"\t*****************************************************\n";
    cout<<"\t* Enter Student Name: ",cin.getline(name,29);
    cout<<"\t*****************************************************\n";
    cout<<"\t* Enter Student Age: ",cin>>age;cin.ignore();
    cout<<"\t*****************************************************\n";
    cout<<"\t* Enter Student Roll Number: ",cin>>Roll_no;cin.ignore();
    cout<<"\t*****************************************************\n";
    cout<<"\t* Enter Student Standard: ",cin.getline(stdn,9);
    cout<<"\t*****************************************************\n";
    cout<<"\t* Enter Parent's Name: ",cin.getline(Pname,29);
    cout<<"\t*****************************************************\n";
    cout<<"\t* Enter Bus Number: ",cin>>busno;cin.ignore();
    cout<<"\t*****************************************************\n";
}

void student::showdata() {
    cout<<"--------------------------------------\n";
    cout<<"Student Name: "<<name<<endl;
    cout<<"Student Age: "<<age<<endl;
    cout<<"Student Roll Number: "<<Roll_no<<endl;
    cout<<"Student Standard: "<<stdn<<endl;
    cout<<"Parent's Name: "<<Pname<<endl;
    cout<<"Bus Number: "<<busno<<endl;
}

int student::storedata() {
    if (age==0 || Roll_no==0){
        cout<<"Student is not in the system"<<endl;
        return 0;
    } else {
        ofstream fout("student.txt",ios::app);
        if (!fout){
            cout<<"Error finding file";
            return 0;
        }
        fout<<Roll_no<<"|"<<name<<"|"<<Pname<<"|"<<stdn<<"|"<<age<<"|"<<busno<<"\n";
        fout.close();
        return 1;
    }
}

void student::viewAlldata() {
    ifstream fi("student.txt");
    if (!fi) {
        cout<<"File not found"<<endl;
        return;
    }

    char line[200];
    cout << "\nAll Student Records\n";
    cout << "--------------------------------------\n";

    while (fi.getline(line, 200)) {
        char* token = strtok(line, "|");
        if (token) Roll_no = atoi(token);
        token = strtok(NULL, "|");
        if (token) strcpy(name, token);
        token = strtok(NULL, "|");
        if (token) strcpy(Pname, token);
        token = strtok(NULL, "|");
        if (token) strcpy(stdn, token);
        token = strtok(NULL, "|");
        if (token) age = atoi(token);
        token = strtok(NULL, "|");
        if (token) busno = atoi(token);

        showdata();
    }

    fi.close();
}

void student::searchDataBase(char* t) {
    int count=0;
    ifstream fi("student.txt");
    if (!fi){
        cout<<"Error file not found:";
        return;
    }

    char line[200];
    while (fi.getline(line, 200)) {
        char* token = strtok(line, "|");
        if (token) Roll_no = atoi(token);
        token = strtok(NULL, "|");
        if (token) strcpy(name, token);
        token = strtok(NULL, "|");
        if (token) strcpy(Pname, token);
        token = strtok(NULL, "|");
        if (token) strcpy(stdn, token);
        token = strtok(NULL, "|");
        if (token) age = atoi(token);
        token = strtok(NULL, "|");
        if (token) busno = atoi(token);

        if (strcmp(t,name)==0) {
            showdata();
            count++;
        }
    }

    if (count==0){
        cout<<"Student not Found\n";
    }

    fi.close();
}

void student::showsearch() {
    cout<<"\t\t**********************************\n";
    cout<<"\t\t*      STUDENT SEARCH OPTION     *\n";
    cout<<"\t\t**********************************\n";
    char search[30];
    cout<<"Enter the Student Name:";
    cin.ignore();
    cin.getline(search,29);
    searchDataBase(search);
}

void student::deleteData(char *t) {
    ifstream fi("student.txt");
    ofstream fo("temp.txt");
    if (!fi|| !fo){
        cout<<"Error, file not found";
        return;
    }

    char line[200];
    bool found=false;

    while (fi.getline(line, 200)) {
        char temp[200];
        strcpy(temp, line);
        char* token = strtok(temp, "|");
        int temp_roll = atoi(token);
        token = strtok(NULL, "|");
        char* temp_name = token;

        if (strcmp(temp_name, t) == 0) {
            found = true;
            continue;
        } else {
            fo << line << "\n";
        }
    }

    fi.close();
    fo.close();
    remove("student.txt");
    rename("temp.txt","student.txt");

    if (found) {
        cout<<"Student deleted successfully.\n";
    } else {
        cout<<"Student not found.\n";
    }
}

void student::updateData(char* t){
    ifstream fi("student.txt");
    ofstream fo("temp.txt");

    if (!fi || !fo){
        cout<<"Error file not found"<<endl;
        return;
    }

    char line[200];
    bool found=false;

    while (fi.getline(line, 200)) {
        char temp[200];
        strcpy(temp, line);
        char* token = strtok(temp, "|");
        int temp_roll = atoi(token);
        token = strtok(NULL, "|");
        char* temp_name = token;

        if (strcmp(temp_name, t) == 0) {
            found = true;
            cout<<"Record found. Enter the updated data: "<<endl;
            getdata();
            fo << Roll_no << "|" << name << "|" << Pname << "|" << stdn << "|" << age << "|" << busno << "\n";
        } else {
            fo << line << "\n";
        }
    }

    fi.close();
    fo.close();

    if (found) {
        remove("student.txt");
        rename("temp.txt","student.txt");
        cout<<"Record Updated";
    } else {
        cout<<"Student not found";
        remove("temp.txt");
    }
}

int main() {
    student s1;
    s1.loadingBar();
    s1.intro();
    s1.login();
    int choice=0;
    while (choice!=6) {
        system("cls");

        cout<<"*****************************************************************\n";
        cout<<"***              1. Insert Student record.                    ***\n";
        cout<<"***              2. View All Student record.                  ***\n";
        cout<<"***              3. Search Student record.                    ***\n";
        cout<<"***              4. Delete Student record.                    ***\n";
        cout<<"***              5. Update Student record.                    ***\n";
        cout<<"***              6. For Exit The Program.                     ***\n";
        cout<<"*****************************************************************\n";
        cout<<"\n        Enter Your choice:";
        cin>>choice;

        switch(choice) {
            case 1:
                s1.getdata();
                s1.storedata();
                cout<<"\n\t\t Data is Successfully Stored:";
                getch();
                break;
            case 2:
                s1.viewAlldata();
                getch();
                break;
            case 3:
                s1.showsearch();
                getch();
                break;
            case 4: {
                char name[30];
                cout<<"\n\n Enter Student Name to delete a record:";
                cin.ignore();
                cin.getline(name,29);
                s1.deleteData(name);
                getch();
                break;
            }
            case 5: {
                char name[30];
                cout<<"\n\n Enter Student Name to Update a record:";
                cin.ignore();
                cin.getline(name,29);
                s1.updateData(name);
                getch();
                break;
            }
            case 6:
                cout<<"\n\t\t Thank You For using This Application:";
                cout<<"\n\t\t Enter Any Key To Exit:-";
                getch();
                exit(0);
            default:
                cout<<"Invalid Input Try Again:";
                cin.get();
        }
    }
    return 0;
}
