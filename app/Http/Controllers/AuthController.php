<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Cookie;

class AuthController extends Controller
{
    public function index()
{
    return csrf_token(); 
}
    public function register(Request $request){
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
                               'email' => 'required|string|email|max:255|unique:users',
                               'password' => 'required|string|min:8',
            ]);
            
                  $user = User::create([
                          'name' => $validatedData['name'],
                               'email' => $validatedData['email'],
                               'password' => Hash::make($validatedData['password']),
                   ]);
            
            $token = $user->createToken('auth_token')->plainTextToken;
            
            return response()->json([
                          'access_token' => $token,
                          'token_type' => 'Bearer',
            ]);
    }

    public function login(Request $request)
    {
        if(!Auth::attempt($request->only('email', 'password'))) {
            return \response([
                'error' => 'Invalid Credentials'
            ]);
        }

            $user = Auth::user();

            $token = $user->createToken('token')->plainTextToken;
            $cookie = cookie('jwt', $token, 60*24);
            $userCookie= cookie('user', $user, 60*24);
            return \response([
                'jwt' => $token,
                'user' => $user
            ])->withCookie($cookie)
              ->withCookie($userCookie);

        
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['msg' => 'Logout Successfull']);
    }



}