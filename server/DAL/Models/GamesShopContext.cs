using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace DAL.Models
{
    public partial class GamesShopContext : DbContext
    {
        public GamesShopContext()
        {
        }

        public GamesShopContext(DbContextOptions<GamesShopContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Buy> Buys { get; set; } = null!;
        public virtual DbSet<Category> Categories { get; set; } = null!;
        public virtual DbSet<Customer> Customers { get; set; } = null!;
        public virtual DbSet<Game> Games { get; set; } = null!;
        public virtual DbSet<SaleDetail> SaleDetails { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-56OHIAJ\\MSSQLSERVER01;Database=GamesShop;Trusted_Connection=True;TrustServerCertificate=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Buy>(entity =>
            {
                entity.ToTable("Buy");

                entity.Property(e => e.BuyDaty).HasColumnType("date");

                entity.Property(e => e.CustId).HasColumnName("CustID");

                entity.HasOne(d => d.Cust)
                    .WithMany(p => p.Buys)
                    .HasForeignKey(d => d.CustId)
                    .HasConstraintName("FK__Buy__CustID__48CFD27E");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.ToTable("Category");

                entity.Property(e => e.CategoryName)
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.HasKey(e => e.CustId)
                    .HasName("PK__Customer__049E3A899C959E3A");

                entity.ToTable("Customer");

                entity.Property(e => e.CustId).HasColumnName("CustID");

                entity.Property(e => e.CreditNum)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.CustName)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.CustPassWord)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Cvc)
                    .HasMaxLength(3)
                    .IsUnicode(false);

                entity.Property(e => e.VolidThru)
                    .HasMaxLength(10)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Game>(entity =>
            {
                entity.Property(e => e.GameId).HasColumnName("GameID");

                entity.Property(e => e.GameImg)
                    .HasMaxLength(225)
                    .IsUnicode(false);

                entity.Property(e => e.GameName)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.HasOne(d => d.GameCategoryNavigation)
                    .WithMany(p => p.Games)
                    .HasForeignKey(d => d.GameCategory)
                    .HasConstraintName("FK__Games__GameCateg__5CD6CB2B");
            });

            modelBuilder.Entity<SaleDetail>(entity =>
            {
                entity.HasKey(e => e.SaleCode)
                    .HasName("PK__SaleDeta__0F57A49ECB8D0F5A");

                entity.Property(e => e.GameId).HasColumnName("GameID");

                entity.HasOne(d => d.Buy)
                    .WithMany(p => p.SaleDetails)
                    .HasForeignKey(d => d.BuyId)
                    .HasConstraintName("FK__SaleDetai__BuyId__5FB337D6");

                entity.HasOne(d => d.Game)
                    .WithMany(p => p.SaleDetails)
                    .HasForeignKey(d => d.GameId)
                    .HasConstraintName("FK__SaleDetai__GameI__60A75C0F");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
