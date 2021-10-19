<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use App\Models\Tasks;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class TasksController extends Controller
{
    public function showAllTasks(){
        $tasks = Tasks::all();
        return json_encode($tasks);
    }
    public function storeTask(Request $request){
        $task = new Tasks;
        $task->name = $request->name;
        $task->user_id = $request->user()->id;
        $task->save();
        return $task;
    }
    public function toggleCompletedTask($id, Request $request){
        $tasks = Tasks::find($id);
        if(
            $tasks->user_id === $request->user()->id ||
            $request->user()->role === 2 ||
            $request->user()->role === 3
            ) {
                $tasks->completed = !$tasks->completed;
                $tasks->save();
                return 1;

            } else {
                return 0;
            }
    }


}
