using AutoMapper;
using BL.classes;
using BL.servises;
using DAL.classes;
using DAL.Models;
using DAL.servises;
using DTO;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

//using Microsoft.EntityFrameworkCore.DbLoggerCategory;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
//DAL קישורים
builder.Services.AddScoped<IcategoryDAL, CategoryDAL>();
builder.Services.AddScoped<IbuyDAL, BuyDAL>();
builder.Services.AddScoped<IcustomerDAL, CustomerDAL>();
builder.Services.AddScoped<IgameDAL, GameDAL>();
builder.Services.AddScoped<IsaleDetailDAL, SaleDetailDAL>();

//BL קישורים
builder.Services.AddScoped<IcategoryBL, CategoryBL>();
builder.Services.AddScoped<IbuyBL, BuyBL>();
builder.Services.AddScoped<IcustomerBL, CustomerBL>();
builder.Services.AddScoped<IgameBL, GameBL>();
builder.Services.AddScoped<IsaleDetailBL, SaleDetailsBL>();

//המרות
builder.Services.AddAutoMapper(typeof(Program));
//קישור למסד
builder.Services.AddDbContext<GamesShopContext>
(options => options.UseSqlServer("Scaffold-DbContext Server = DESKTOP - 56OHIAJ\\MSSQLSERVER01; Database = GamesShop; Trusted_Connection = True; TrustServerCertificate = True;  Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models"));


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    //הרשאות
    app.UseCors(builder => builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
    app.UseSwagger();
    app.UseSwaggerUI();

}

app.UseStaticFiles(); 

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
