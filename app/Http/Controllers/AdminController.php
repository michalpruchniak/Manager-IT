<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class AdminController extends Controller
{
    public function storeUser(Request $request){
        $user = new User;
        $user->name = 'asdasdsad';
        $user->email = $request->email;
        $user->password = $request->password;
        $user->save();
        
        return $user;

    }
}
