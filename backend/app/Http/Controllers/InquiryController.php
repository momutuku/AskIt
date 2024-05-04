<?php

namespace App\Http\Controllers;

use App\Models\Inquiry;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class InquiryController extends Controller
{
    public function getAll()
    {
        $inquries = Inquiry::all();
        return $this->sendSuccessResponse($inquries, 'Success');
    }

    public function getByID($id)
    {

        $inquiry =  Inquiry::find($id);
        if ($inquiry) {
            return $this->sendSuccessResponse($inquiry->toArray(), 'Success');
        }
        return $this->sendSuccessResponse([], 'Item Not found');
    }

    public function store(Request $request)
    {

        $validation = Validator::make($request->all(), [
            'email' => 'required|email',
            'name' => 'required',
            'message' => 'required',
            'phone' => 'nullable|min:10'
        ]);
        if ($validation->fails()) {
            return $this->sendErrorResponse($validation->errors());
        }
        $inquiry = Inquiry::create($request->all());
        return $this->sendSuccessResponse($inquiry, 'Inquiry Added');
    }

    public function update(Request $request, $id)
    {
        $validation = Validator::make($request->all(), [
            'status' => ['required', Rule::in(['assigned', 'resolved'])],
        ]);
        if ($validation->fails()) {
            return $this->sendErrorResponse($validation->errors());
        }
        $inquiry = Inquiry::findOrFail($id);
        if ($inquiry) {
            $inquiry->update([
                'status' => $request->status
            ]);
            return $this->sendSuccessResponse($inquiry->toArray(), 'Updated');
        }
        return $this->sendSuccessResponse([], 'Item Not found');
    }
}
