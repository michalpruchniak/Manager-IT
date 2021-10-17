<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UsersController extends Controller
{
    public function showAllUsers(){
        $users = User::all();
        return json_encode($users);
    }

    public function changeRole($role, $userID){
        $user = User::find($userID);
        $user->role = $role;
        $user->save();
        
    }
}
