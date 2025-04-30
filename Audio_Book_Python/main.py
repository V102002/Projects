import pyttsx3
import PyPDF2
from tkinter.filedialog import *

player=pyttsx3.init() #initializing

try:
    #Selecting the PDF
    book=askopenfilename()

    #Initialize with PDF reader
    pdfreader=PyPDF2.PdfReader(book)

    #Get the number of pages from the pdf
    pages=len(pdfreader.pages)

    #Read the data from the pages
    for num in range(pages):
        page = pdfreader.pages[num]
        text = page.extract_text()
        if text:
            player.say(text)
        player.runAndWait()
except Exception as e:
    print("Error in loading PDF:",e)