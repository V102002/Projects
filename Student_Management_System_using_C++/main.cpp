#include<iostream>
#include<string.h>
#include<stdio.h>
#include<stdlib.h>
#include<windows.h>
#include<conio.h>
#include<cstring>
using namespace std;

 class student {
    char name[30];
    int Roll_no;
    int age;
    char Pname[30];
    char stdno[10];
    int busno;
    string convert(string s){
      for (int i = 0; i < s.length(); i++){
        s[i]=toupper(s[i]);
      }
      return s;
    }
  public:
    void intro(void); //Introduction of Project 
    void ccolor(int); //Display colorful contain
    void loadingBar(void); //simple loading bar
    void login(void); //Login container
    void getdata(void); //Data from user
    void showdata(void); //Display data
    void viewAlldata(); //Display all data 
    int storedata();
    void searchData(char *);
    void showsearch(void);
    void deleteData(char *);
    void updateData(char *);
    student()
    {
        Roll_no=0;
        age=0;
        busno=0;
        strcpy(name,"no name");
        strcpy(Pname,"no name");
        strcpy(stdno,"not found");
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
 
int main(){

return 0;
}