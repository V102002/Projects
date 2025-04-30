# PDF-To-Speech Converter in Python
This is a simple Python project that convverts text content of a PDF file into speech.
It uses PyPDF2 to extract text from a PDF and pyttsx3 to convert the text into audio.
It also uses tkinter which allows the user to select a pdf file

## Requirement
Make sure you have the python libraries installed:
- pyttsx3  (It is a text-to-speech conversion library)
- PyPDF2   (It is a library to read and manipulate PDF files)

## How to Run
To run the code, type
python main.py 

Then select the pdf file you want to convert to audio

## Working
- The user selects a file using the module tkinter
- The PyPDF2 library read the PDF file and counts the number of pages
- Using the extract_text() function, each page's text is extracted
- The extracted text is converted to audio using pyttsx3 module 
