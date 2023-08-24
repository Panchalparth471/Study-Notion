#include<iostream>
using namespace std;
class Queue{
    public:
    int *arr;
    int size;
    int front;
    int rear;

    Queue(int size){
        this->arr=new int[size];
        this->size=size;
        this->front=-1;
        this->rear=-1;
    }

    void push(int data){
        if(front==-1){
            front++;
            rear++;
            arr[rear]=data;
        }
        else{
            rear++;
            arr[rear]=data;
        }
    }

    void pop(){
        if(front<0){
            cout<<"Queue is empty"<<endl;
        }
        else{
            int ans=arr[front];
            arr[front]=-1;
            front++;

            if(front==rear){
                front=0;
                rear=0;
            }
        }
    }

    void Front(){
        if(front<0){
            cout<<"Queue is empty"<<endl;
        }
        else{
            cout<<arr[front];
        }
    }

    void back() {
         if(rear<0){
            cout<<"Queue is empty"<<endl;
        }
        else{
            cout<<arr[rear]<<endl;
        }

    }

    bool isEmpty(){
        if(front<0){
            return true;
        }
        else{
            return false;
        }
    }
};
int main(){
    Queue q1(5);
    q1.push(1);
    q1.push(2);
    q1.push(3);
    q1.push(4);
    q1.push(5);
    q1.pop();
     q1.pop();
      q1.pop();
       q1.pop();
        q1.pop();
        q1.push(1);
        q1.pop();
        q1.push(2);
        q1.Front();
        q1.back();
}