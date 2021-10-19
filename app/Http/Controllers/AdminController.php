<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\UserRequest;

class AdminController extends Controller
{
    public function storeUser(UserRequest $request){
        try{
            $user = new User;
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = $request->password;
            $user->save();
            
            return $user;
        } catch(Error $error) {
            return $error;
        }


    }
}
