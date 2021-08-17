<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tasks;

class TasksController extends Controller
{
    public function showAllTasks(){
        $tasks = Tasks::all();
        return json_encode($tasks);
    }
}
