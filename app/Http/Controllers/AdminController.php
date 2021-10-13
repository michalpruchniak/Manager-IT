<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\UserRequest;

class AdminController extends Controller
{
    public function storeUser(UserRequest $request){
        $user = new User;
        $user->name = 'asdasdsad';
        $user->email = $request->email;
        $user->password = $request->password;
        $user->save();
        
        return $user;

    }
}
