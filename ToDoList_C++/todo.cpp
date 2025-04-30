#include <iostream>
#include <fstream>
#include <string>
#include <vector>
using namespace std;
//Test Comment
/* Prototypes */
void ParseFile(string, vector<bool>&, vector<string>&, vector<string>&);
void ShowList(vector<bool>, vector<string>, vector<string>);
void ShowMenu();
void AddTask(vector<bool>&, vector<string>&, vector<string>&);
void ToggleTask(vector<bool>&);
void RemoveTask(vector<bool>&, vector<string>&, vector<string>&);
void SaveFile(string, vector<bool>&, vector<string>&, vector<string>&);

/* Global Variables */
ifstream fileReader;
ofstream fileWriter;

/* Start of Program */
int main()
{
  vector<bool> myChecks;
  vector<string> myTasks;
  vector<string> myDates;

  ParseFile("todo.txt", myChecks, myTasks, myDates);

  while (true)
  {
    if (system("CLS")) system("clear");

    ShowList(myChecks, myTasks, myDates);
    ShowMenu();

    cout << "Choice: ";
    int choice;
    cin >> choice;
    cin.ignore(1000, 10);
    cout << endl << endl;

    switch (choice)
    {
      case 1:
        AddTask(myChecks, myTasks, myDates);
        break;
      case 2:
        ToggleTask(myChecks);
        break;
      case 3:
        RemoveTask(myChecks, myTasks, myDates);
        break;
      case 4:
        return 0;
    }

    SaveFile("todo.txt", myChecks, myTasks, myDates);
  }
}

void ParseFile(string fileName,
               vector<bool>& checks,
               vector<string>& tasks,
               vector<string>& dates)
{
  fileReader.open(fileName);
  if (!fileReader.is_open()) return;

  string line;
  while (getline(fileReader, line))
  {
    string check = line.substr(0, 1);
    string task = line.substr(4, line.length());
    string date = task.substr(task.find("| ") + 2, task.length());
    task = task.substr(0, task.find("|"));

    checks.push_back(check == "1");
    tasks.push_back(task);
    dates.push_back(date);
  }

  fileReader.close();
}

void ShowList(vector<bool> checks,
              vector<string> tasks,
              vector<string> dates)
{
  for (int i = 0; i < checks.size(); i++)
  {
    cout << i + 1 << ". ";
    cout << (checks[i] ? "[x] " : "[ ] ");
    cout << tasks[i] << endl;
    cout << "       " << dates[i] << endl << endl;
  }
}

void ShowMenu()
{
  cout << "Menu:" << endl
       << "1. Add a task" << endl
       << "2. Check/uncheck a task" << endl
       << "3. Remove a task" << endl
       << "4. Exit" << endl;
}

void AddTask(vector<bool>& checks,
             vector<string>& tasks,
             vector<string>& dates)
{
  cout << "Add Task" << endl
       << "========" << endl;

  cout << "Description: ";
  string task;
  getline(cin, task);

  cout << "Date: ";
  string date;
  getline(cin, date);

  checks.push_back(false);
  tasks.push_back(task);
  dates.push_back(date);
}

void ToggleTask(vector<bool>& checks)
{
  cout << "Toggle Task" << endl
       << "===========" << endl;

  cout << "Number: ";
  int num;
  cin >> num;
  cin.ignore(1000, 10);

  if (num >= 1 && num <= (int)checks.size())
  {
    checks[num - 1] = !checks[num - 1];
  }
  else
  {
    cout << "Invalid task number!" << endl;
  }
}

void RemoveTask(vector<bool>& checks,
                vector<string>& tasks,
                vector<string>& dates)
{
  cout << "Remove Task" << endl
       << "===========" << endl;

  cout << "Number: ";
  int num;
  cin >> num;
  cin.ignore(1000, 10);

  if (num >= 1 && num <= (int)tasks.size())
  {
    checks.erase(checks.begin() + num - 1);
    tasks.erase(tasks.begin() + num - 1);
    dates.erase(dates.begin() + num - 1);
  }
  else
  {
    cout << "Invalid task number!" << endl;
  }
}

void SaveFile(string fileName,
              vector<bool>& checks,
              vector<string>& tasks,
              vector<string>& dates)
{
  fileWriter.open(fileName);
  if (!fileWriter.is_open()) return;

  for (size_t i = 0; i < checks.size(); i++)
  {
    fileWriter << (checks[i] ? "1" : "0")
               << " - "
               << tasks[i]
               << "| "
               << dates[i]
               << endl;
  }

  fileWriter.close();
}
