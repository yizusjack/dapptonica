<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\Auth\SignupRequest;

class UserController extends Controller
{
    public function signup(SignupRequest $request) {
        $user = $request->validated();

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        $token = $user->createToken('main')->plainTextToken;

        return response(compact('user', 'token'));
    }

    public function login(LoginRequest $request) {
        $data = $request->validated();

        if(!Auth::attempt($data))
        {
            return response([
                'message' => 'Las credenciales no coinciden',
            ]);
        }

        $user = Auth::user();
        $user->tokens()->where('name', 'main')->delete();
        $token = $user->createToken('main')->plainTextToken;

        return response (compact('user', 'token'));
    }
}
