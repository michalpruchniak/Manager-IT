<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TasksController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\UsersController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/auth', [TasksController::class, 'auth']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware(['auth:sanctum'])->group(function(){
    Route::get('/taks/all-tasks', [TasksController::class, 'showAllTasks']);
    Route::post('/taks/store-task', [TasksController::class, 'storeTask']);
    Route::get('/taks/toggle-completed-task/{id}', [TasksController::class, 'toggleCompletedTask']);
    Route::post('/users/store-user', [AdminController::class, 'storeUser']);
    Route::get('/users/all-users', [UsersController::class, 'showAllUsers']);
    Route::get('/users/admin/change-role/{role}/{userid}', [AdminController::class, 'changeRole']);


     Route::get('/userdetails', function (Request $request) {
        return $request->cookie('user');
    });
});