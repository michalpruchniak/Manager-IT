<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use App\Models\Tasks;
use App\Models\User;

class TasksController extends Controller
{
    public function showAllTasks(){
        $tasks = Tasks::all();
        return json_encode($tasks);
    }
    public function storeTask(Request $request){
        $task = new Tasks;
        $task->name = $request->name;
        $task->save();
        return $task;
    }
    public function toggleCompletedTask($id, Request $request){
        $tasks = Tasks::find($id);
        $tasks->completed = !$tasks->completed;
        $tasks->save();
        return $tasks;
    }


    public function getToken(){
        $user = User::first();
        $token = $user->createToken('Authrization', ['server:update'])->plainTextToken;
        Cookie::queue("Authorization", $token);

        return $token;
    }
}
