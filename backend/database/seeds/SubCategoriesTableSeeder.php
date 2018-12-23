<?php

use Illuminate\Database\Seeder;

class SubCategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            ['category_id'=> '1','name'=> 'Account Transfer'],
            ['category_id'=> '1','name'=> 'Business'],
            ['category_id'=> '1','name'=> 'Gifts'],
            ['category_id'=> '1','name'=> 'Insurance'],
            ['category_id'=> '1','name'=> 'Interests'],
            ['category_id'=> '1','name'=> 'Loans'],
            ['category_id'=> '1','name'=> 'Part Time Work'],
            ['category_id'=> '1','name'=> 'Pension'],
            ['category_id'=> '1','name'=> 'Personal Savings'],
            ['category_id'=> '1','name'=> 'Profit'],
            ['category_id'=> '1','name'=> 'Salary'],
            ['category_id'=> '1','name'=> 'Rents'],
            ['category_id'=> '1','name'=> 'Refunds'],
            ['category_id'=> '1','name'=> 'Sale'],
            ['category_id'=> '1','name'=> 'Others'],
            ['category_id'=> '2','name'=> 'Bills'],
            ['category_id'=> '2','name'=> 'Business'],
            ['category_id'=> '2','name'=> 'Beauty'],
            ['category_id'=> '2','name'=> 'Education'],
            ['category_id'=> '2','name'=> 'Entertainment'],
            ['category_id'=> '2','name'=> 'EMI'],
            ['category_id'=> '2','name'=> 'Family'],
            ['category_id'=> '2','name'=> 'Financial'],
            ['category_id'=> '2','name'=> 'Food'],
            ['category_id'=> '2','name'=> 'Gadgets'],
            ['category_id'=> '2','name'=> 'Groceries'],
            ['category_id'=> '2','name'=> 'Helth'],
            ['category_id'=> '2','name'=> 'Insurance'],
            ['category_id'=> '2','name'=> 'Interests'],
            ['category_id'=> '2','name'=> 'Loss'],
            ['category_id'=> '2','name'=> 'Loans'],
            ['category_id'=> '2','name'=> 'Mobile'],
            ['category_id'=> '2','name'=> 'Personal'],
            ['category_id'=> '2','name'=> 'Purchase'],
            ['category_id'=> '2','name'=> 'Rents'],
            ['category_id'=> '2','name'=> 'Shopping'],
            ['category_id'=> '2','name'=> 'Tax'],
            ['category_id'=> '2','name'=> 'Travel'],
            ['category_id'=> '2','name'=> 'Others'],
        ];

        \App\IncomeExpense\Models\SubCategory::insert($data);
    }
}
