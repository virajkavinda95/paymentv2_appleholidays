<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Database\Seeder;

class AuthController extends Controller
{

    public $user;

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
        $this->user = new User();
    }

    public function getAuthUser()
    {
        try {
            return response([
                'status' => 200,
                'user' => auth()->user()
            ]);
        } catch (\Exception $ex) {
            throw $ex;
        }
    }

    public function login(Request $request)
    {
        try {

            if (!Auth::attempt($request->only('email', 'password'))) {
                return response([
                    'status' => 401,
                    'message' => 'Unauthorized'
                ]);
            } else {

                $user = User::where('email', $request['email'])->firstOrFail();

                $token = $user->createToken('auth_token')->plainTextToken;
                return response()->json([
                    'status' => 200,
                    'access_token' => $token,
                    'token_type' => 'Bearer',
                    'expires_in' => 60 * 60,
                    'user' => auth()->user()
                ]);
            }
        } catch (\Exception $ex) {
            throw $ex;
        }
    }

    public function register()
    {
        $credentials = request(['name', 'email', 'password', 'role']);
        $credentials['password'] = bcrypt($credentials['password']);


        $response = $this->user->createUser($credentials);

        return $response;
    }

    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'status' => 200,
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => 60 * 60,
            'user' => auth()->user()
        ]);
    }
}
