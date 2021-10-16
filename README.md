# **TuPcIdeal**

Now you can visit our webpage on 

[TuPcIdeal](http://tupcideal.tk/)

[![DigitalOcean Referral Badge](https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg)](https://www.digitalocean.com/?refcode=0d1012b30ecf&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge)


## **Purpose**
The objective of this wiki is to save all the relevant information of this project, which can be the different assignments, progress, meetings with the team, information of interest to the team, etc.




**Project setup**

The following guide will explain in detail how to configure the development environment and all the tools required for the project. Therefore, it is essential not to skip any installation step.

[[_TOC_]]

## **Programs**


## **1. Python**

Python will be used Version: 3.9.1 According to OS
- Windows: [Python](https://www.python.org/downloads/)
- Ubuntu on terminal type sudo apt-get update then sudo apt-get install python3.9.1
- To check if everything was fine, run in terminal
o Windows: Python –version
o Linux: Python3 --version

## **2. Pip**

To install pip, the Windows console will be used ('cmd') or using Linux from bash, the following command must be executed once Python is installed in the previous step.

- Command: python get-pip.py
o To check if everything was fine, run in terminal: pip --version

## **3. Django**

Django you must have the previous steps installed and after this using pip run in cmd for Windows or in bash for Linux
- Command: `pip install Django == 3.1.6`

## **4. Development environment**

Visual studio code is required for the environment. This can be downloaded from the official website: [Vs code](https://code.visualstudio.com/ )

- Once the development environment is installed, select the option ![image.png](/.attachments/image-eaf9dc49-13c6-4d8e-938f-86917e1cb0d8.png) to install the following extensions:

![image](https://user-images.githubusercontent.com/53226911/137602443-42d39df5-2017-4144-b266-02d74c6ea448.png)
![image](https://user-images.githubusercontent.com/53226911/137602447-8a51f39e-fc96-41c8-ab4c-030be1f66ab7.png)
![image](https://user-images.githubusercontent.com/53226911/137602449-608b7def-06b2-45d8-9eae-3d1cb152f442.png)
![image](https://user-images.githubusercontent.com/53226911/137602454-318388df-f4cc-4963-81ea-bdc5bc2f7668.png)

## **5. Git**

To install git it depends on your os

- **Windows**
Use the following link: [Git](https://git-scm.com/)

![image](https://user-images.githubusercontent.com/53226911/137602475-c33b4dab-5080-4764-98ca-e84a20f52e19.png)

  Select download
  
![image](https://user-images.githubusercontent.com/53226911/137602479-b18c7a3e-d87c-4825-9d0b-7a528a913738.png)

  Watch this video to install and set up git and put your username and mail [Tutorial](https://www.youtube.com/watch?v=GaaAdAdfRuQ&ab_channel=CodingLeader)

- **Linux**

  Depend on your distro run the command in your terminal [Git install](https://git-scm.com/download/linux)

- Some git commands 

  **Note: the first two commands are required to run if you are using git for the first time**
  
![image](https://user-images.githubusercontent.com/53226911/137602482-04fc87d7-5d34-4b47-978f-672c6a12ffb6.png)

  for more info see [Git Cheat Sheet](https://training.github.com/downloads/github-git-cheat-sheet.pdf)

## **6. Node**

To work on the frontend you need to install Node.js to run the frontend server

to install node on windows open this link and continue with the install [Node](https://nodejs.org/dist/v14.16.0/node-v14.16.0-x64.msi).

On Linux follow this tutorial [Installation of Node.js on Linux
](https://www.geeksforgeeks.org/installation-of-node-js-on-linux/)
### 6.1 Npm 

To install react and the others require libraries to the project you need to install npm to do this you need to install first Node.js then on the terminal run `npm install npm@latest -g`

one you install npm and use a git-clone of our project you need to run this command to install all the dependencies for the project running `npm install` 
