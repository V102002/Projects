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
      void intro(); //Introduction of Project 
      void ccolor(int); //Display colorful contain
      void loadingBar(); //simple loading bar
      void login(); //Login container
      void getdata(); //Data from user
      void showdata(); //Display data
      int storedata();
      void viewAlldata(); //Display all data 
      void searchDataBase(char *);
      void showsearch();
      void deleteData(char *);
      void updateData(char *);
      student() //Constructor of the student class, initializing the default values
      {
          Roll_no=0;
          age=0;
          busno=0;
          strcpy(name,"no name");
          strcpy(Pname,"no name");
          strcpy(stdn,"not found");
      }

  };
  void student::intro()
  {
    ccolor(15);
    cout<<"*****************************************************************"<<endl
    <<"***************    STUDENT MONITORING SYSTEM     ********************"<<endl
    <<"_____________________________________________________________________\n"<<endl;

    getch();
  }
  void student::ccolor(int clr)
  {
      HANDLE hConsole = GetStdHandle(STD_OUTPUT_HANDLE);
      SetConsoleTextAttribute(hConsole, clr);
  }

  void student::loadingBar()
  {
      for (int  i = 15; i <=100; i++){
        system("cls");
        ccolor(14);
        cout<<"\n\n\n\n\n\n\n\t\t\t";
        cout<<i<<"%%...Loading....\n\n\t\t";
        cout<<" ";
        for (int j = 0; j < i; j++){
          cout<<" ";
        }
        Sleep(50); //Sleep for 50 millisecond
        if (i==90 || i==50 || i==96 || i==83){
          Sleep(50);
        }
      }
      system("cls");
  }
  void student::login()
  {
    ccolor(14);
    char ui[]="ASHFAQUE";
    char psw[]="3535";
    char gui[10],gpsw[10];
    
  }
  void student::getdata()
  {
    fflush(stdin);
    cout<<"\t*****************************************************"<<endl;

    cout<<"\t* Enter Student Name: ",cin.getline(name,29);fflush(stdin);
    
    cout<<"\t*****************************************************"<<endl;
    
    cout<<"\t* Enter Student Age: ",cin>>age;fflush(stdin);
    
    cout<<"\t*****************************************************"<<endl;
    
    cout<<"\t* Enter Student Roll Number: ",cin>>Roll_no;fflush(stdin);
    
    cout<<"\t*****************************************************"<<endl;
    
    cout<<"\t* Enter Student Standard: ",cin.getline(stdn,9);fflush(stdin);
    
    cout<<"\t*****************************************************"<<endl;
    
    cout<<"\t* Enter Parent's Name: ",cin.getline(Pname,29);fflush(stdin);
    
    cout<<"\t*****************************************************"<<endl;
    
    cout<<"\t* Enter Bus Number: ",cin>>busno;fflush(stdin);
    
    cout<<"\t*****************************************************"<<endl;
  }
 
  void student::showdata()
  {
    cout<<"Student Name: "<<name<<endl;
    cout<<"Student Age: "<<age<<endl;
    cout<<"Student Roll Number: "<<Roll_no<<endl;
    cout<<"Student Standard: "<<stdn<<endl;
    cout<<"Parent's Name: "<<Pname<<endl;
    cout<<"Bus Number: "<<busno<<endl;
  }
  int student::storedata()
  {
    if (age==0 || Roll_no==0){
      cout<<"Student is not in the system"<<endl;
      return 0;
    }else{
      ofstream fout("student.txt",ios::app);
      if (!fout){
        cout<<"Error finding file";
        return 0;
      }
      fout<<name<<" | "<<age<<" | "<<Roll_no<<" | "<<stdn<<" | "<<Pname<<" | "<<busno<<"\n";
      fout.close();
      return 1;
    }
    
  }
  void student::viewAlldata()
  {
    ifstream fi("student.txt");
    if(!fi){
      cout<<"File not found"<<endl;
      return;
    }
    //Using temporary variables
    char temp_name[30],temp_Pname[30],temp_stdn[10];
    int temp_roll,temp_age,temp_busno;

    cout<<"\nAll Student Records\n";
    cout<<"--------------------------------------\n";
    while (fi>>temp_roll>>ws && fi.getline(temp_name,30,'|') && //ws means removing whitespace
        fi.getline(temp_Pname,30,'|') && fi.getline(temp_stdn,10,'|')
        && fi>>temp_age>>ws && fi>>temp_busno>>ws){
      Roll_no = temp_roll;
      age = temp_age;
      busno = temp_busno;
      strcpy(name, temp_name);
      strcpy(Pname, temp_Pname);
      strcpy(stdn, temp_stdn);
      showdata();
    }
    
  }
  void student::searchDataBase(char* t)
  {
    int count=0;
    ifstream fi("student.txt");
    if (!fi){
      cout<<"Error file not found:";
      return;
    }
    //Same as viewAllData function, use temporary variables
    char temp_name[30],temp_Pname[30],temp_stdn[10];
    int temp_roll,temp_age,temp_busno;


    while (fi>>temp_roll>>ws && fi.getline(temp_name,30,'|') && //ws means removing whitespace
    fi.getline(temp_Pname,30,'|') && fi.getline(temp_stdn,10,'|')
    && fi>>temp_age>>ws && fi>>temp_busno>>ws){
      if (strcmp(t,temp_name)==0){//Find Student Name
        Roll_no=temp_roll;
        age=temp_age;
        busno=temp_busno;
        strcpy(name,temp_name);
        strcpy(Pname,temp_Pname);
        strcpy(stdn,temp_stdn);

        showdata();
        count++;
      }
    }

    if (count==0){
      cout<<"Student not Found"<<"\n";
    }
    
    fi.close();
  }
  void student::showsearch()
  {
    cout<<"\t\t**********************************"<<"\n";
    cout<<"\t\t*                                *"<<"\n";
    cout<<"\t\t*      STUDENT SEARCH OPTION     *"<<"\n";
    cout<<"\t\t**********************************"<<"\n";
    cout<<"\t\t*                                *"<<"\n";

    char search[30];
    cout<<"Enter the Student Name:";
    cin.ignore();
    cin.getline(search,29);
    searchDataBase(search);
  }
  void student::deleteData(char *t)
  {
    ifstream fi("student.txt");
    ofstream fo("temp.txt");
    if (!fi|| !fo){
      ccolor(12);
      cout<<"Error, file not found";
      return;
    }
    char temp_name[30],temp_Pname[30],temp_stdn[10];
    int temp_roll,temp_age,temp_busno;
    bool found=false;

    //Read through the student.txt file
    while (fi>>temp_roll>>ws && fi.getline(temp_name,30,'|') && //ws means removing whitespace
    fi.getline(temp_Pname,30,'|') && fi.getline(temp_stdn,10,'|')
    && fi>>temp_age>>ws && fi>>temp_busno>>ws){
      if (strcmp(temp_name,t)==0){
        found=true;
        continue; //Skip the record we want to delete
      }

      //Writing the other records into temp.txt
      fo<<temp_roll<<" "
        <<temp_name<<"|"<<temp_Pname<<"|"<<temp_stdn<<"|"
        <<temp_age<<" "<<temp_busno<<"\n";
    }
    fi.close();
    fo.close();

    remove("student.txt");
    rename("temp.txt","student.txt");

    if (found){
      ccolor(12);
      cout<<"Student deleted succesfully.\n";
    }else{
      ccolor(12);
      cout<<"Student not found.\n";
    }
    
  }
int main(){

return 0;
}